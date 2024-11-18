import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // To get the article ID from the URL
import { getArticleById } from '../api/axiosInstance'; // Assume you have this function to fetch the article

function Article() {
  const { id } = useParams(); // Get the article ID from the URL
  const [article, setArticle] = useState(null); // State to store the fetched article
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    // Fetch the article data by ID
    getArticleById(id)
      .then((data) => {
        setArticle(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load article.");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
      <p className="text-gray-700 mb-6">{article.content}</p>
    </div>
  );
}

export default Article;
