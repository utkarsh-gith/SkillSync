import re
import nltk
import pandas as pd
from flask import Flask, request, jsonify
from flask_cors import CORS
from nltk.corpus import stopwords
from nltk.stem import PorterStemmer
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# Initialize Flask app
app = Flask(__name__)
CORS(app)

# Download NLTK stopwords
nltk.download('stopwords')

# Load and preprocess dataset
df = pd.read_csv('../frontend/public/data/Online_Courses.csv')

# Rename columns
df.rename(columns={
    "Description": "Short Intro",
    "Skills / Interests": "Skills"
}, inplace=True)

# Fill missing values (assuming 'Short Intro' is the column)
df['Short Intro'].fillna('', inplace=True) 

# Generate textual representation for each course
def textual_rep(row):
    return f"""
    Title: {row['Title']}
    URL: {row['URL']}
    Category: {row['Category']}
    Sub-Category: {row['Sub-Category']}
    Language: {row['Language']}
    Skills: {row['Skills']}
    Description: {row['Short Intro']}
    """


df['textual_representation'] = df.apply(textual_rep, axis=1)

# Text preprocessing
porter_stemmer = PorterStemmer()
stop_words = set(stopwords.words('english'))

def stemming(content):
    content = re.sub('[^a-zA-Z]', ' ', content).lower()
    words = content.split()
    return ' '.join(porter_stemmer.stem(word) for word in words if word not in stop_words)

df['processed_text'] = df['textual_representation'].apply(stemming)

# Vectorize the processed text
vectorizer = TfidfVectorizer()
text_vectors = vectorizer.fit_transform(df['processed_text'])

# Precompute similarity matrix
similarity_matrix = cosine_similarity(text_vectors)

@app.route('/recommend', methods=['POST'])
def recommend():
    try:
        print("Received request:", request.json)  # Log the request
        user_input = request.json.get('query', '')
        if not user_input:
            return jsonify({'error': 'No query provided'}), 400

        user_input_processed = stemming(user_input)
        user_vector = vectorizer.transform([user_input_processed])
        similarity_scores = cosine_similarity(user_vector, text_vectors).flatten()

        top_indices = similarity_scores.argsort()[-10:][::-1]
        top_recommendations = []
        for idx in top_indices:
            if similarity_scores[idx] > 0:
                top_recommendations.append({
                    'title': df.loc[idx, 'Title'],
                    'url': df.loc[idx, 'URL'],
                    'category': df.loc[idx, 'Sub-Category'] if pd.notna(df.loc[idx, 'Sub-Category']) else 'Unknown',
                    'skills': df.loc[idx, 'Skills'] if pd.notna(df.loc[idx, 'Skills']) else 'Unknown',
                    'score': similarity_scores[idx]
                })

        print("Top recommendations:", top_recommendations)
        if not top_recommendations:
            return jsonify([])  # Return an empty array if no recommendations are found

        return jsonify(top_recommendations)

    except Exception as e:
        print("Error:", str(e))
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
