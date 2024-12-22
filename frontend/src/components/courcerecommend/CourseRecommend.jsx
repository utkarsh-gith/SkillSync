import React, { useState } from "react";
import axios from "axios";

const CourseRecommend = () => {
  const [query, setQuery] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!query) {
      setError("Please enter a query.");
      return;
    }
    try {
      const response = await axios.post("http://localhost:5000/recommend", { query });
      console.log("Response data:", response.data);  // Log the response for debugging

      if (Array.isArray(response.data)) {
        setRecommendations(response.data);
        setError("");
      } else {
        setRecommendations([]);
        setError("Unexpected response format.");
      }
    } catch (err) {
      setError("Error fetching recommendations. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center py-8 px-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Course Recommendation</h1>
      <div className="flex items-center gap-4 mb-6">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter what you want to learn"
          className="px-4 py-2 border border-gray-300 rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Search
        </button>
      </div>

      {error && <div className="text-red-500 mb-4">{error}</div>}

      <div className="w-full max-w-2xl">
        {recommendations.length > 0 ? (
          recommendations.map((course, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-md p-4 mb-4 border border-gray-200"
            >
              <h3 className="text-lg font-semibold text-blue-600 hover:underline">
                <a href={course.url} target="_blank" rel="noopener noreferrer">
                  {course.title}
                </a>
              </h3>
              <p className="mt-2">
                <strong>Category:</strong> {course.category}
              </p>
              <p>
                <strong>Skills:</strong> {course.skills}
              </p>
              <p>
                <strong>Relevance Score:</strong> {course.score.toFixed(2)}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No recommendations yet.</p>
        )}
      </div>
    </div>
  );
};

export default CourseRecommend;
