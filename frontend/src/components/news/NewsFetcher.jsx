import React, { useState } from 'react';
import axios from 'axios';

const NewsFetcher = () => {
  const [query, setQuery] = useState('');
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchNews = async () => {
    if (!query) return;

    setLoading(true);
    setError(null);
    
    try {
      const response = await axios.get('https://newsapi.org/v2/everything', {
        params: {
          q: query,
          apiKey: '075235c9b1664a80ab6a08d1c3587240', // Replace with your NewsAPI key
        },
      });

      setNews(response.data.articles);
    } catch (err) {
      setError('Failed to fetch news');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Real-Time News Fetcher</h1>
      <div className="flex flex-col items-center mb-4">
        <input
          type="text"
          placeholder="Enter a topic"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="px-4 py-2 border rounded-md w-full md:w-1/2 mb-2"
        />
        <button
          onClick={fetchNews}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Fetch News
        </button>
      </div>

      {loading && <p className="text-center">Loading...</p>}

      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {news.length > 0 && (
          news.map((article, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
              >
                {article.title}
              </a>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{article.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default NewsFetcher;
