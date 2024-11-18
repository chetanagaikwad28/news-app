import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticleById, getCommentsByArticleId } from '../api/axiosInstance';

function ArticleDetails() {
  const { id } = useParams(); // Get the article ID from the route parameter
  const [article, setArticle] = useState(null); // State for article data
  const [comments, setComments] = useState([]); // State for comments
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    // Fetch article details and comments
    async function fetchData() {
      try {
        const articleData = await getArticleById(id);
        const commentsData = await getCommentsByArticleId(id);
        setArticle(articleData);
        setComments(commentsData);
      } catch (err) {
        console.error("Error fetching article or comments:", err);
        setError("Failed to load the article or comments.");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto p-6">
      {/* Display the article title and content */}
      <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
      <p className="text-gray-700 mb-6">{article.content}</p>

      {/* Display the comments */}
      <h2 className="text-2xl font-semibold mb-4">Comments</h2>
      {comments.length > 0 ? (
        <ul className="space-y-4">
          {comments.map((comment, index) => (
            <li key={index} className="border p-4 rounded-md">
              <p className="text-gray-700">{comment.text}</p>
              <p className="text-sm text-gray-500">- {comment.author}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No comments available for this article.</p>
      )}
    </div>
  );
}

export default ArticleDetails;
