import React, { useEffect, useState } from 'react';
import { getArticles, deleteArticle } from '../api/axiosInstance'; // Importing axios functions
import { Link } from 'react-router-dom'; // For navigation to the article detail page

function Home() {
  const [articles, setArticles] = useState([]);  // State to hold the articles
  const [loading, setLoading] = useState(true);  // Loading state

  useEffect(() => {
    // Fetch articles when the component is mounted
    getArticles()
      .then((data) => {
        setArticles(data);  // Set the fetched articles
        setLoading(false);  // Stop loading
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
        setLoading(false);  // Stop loading even if there's an error
      });
  }, []);

  const handleDelete = (id) => {
    // Delete an article
    if (window.confirm("Are you sure you want to delete this article?")) {
      deleteArticle(id)
        .then(() => {
          console.log("Article deleted successfully.");
          setArticles(articles.filter(article => article._id !== id));  // Remove deleted article from state
        })
        .catch((error) => {
          console.error("Error deleting article:", error);
        });
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Articles</h1>

      {/* Check if there are no articles */}
      {articles.length === 0 ? (
        <p>No articles available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Render each article */}
          {articles.map((article) => (
            <div key={article._id} className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
              <h2 className="text-xl font-semibold text-blue-600">{article.title}</h2>
              
              {/* Truncate content to 34 characters and add ellipsis */}
              <p className="mt-2 text-gray-700">
                {article.content.length > 34 ? `${article.content.substring(0, 104)}...` : article.content}
              </p>

              <div className="mt-4 flex justify-between items-center">
                {/* View Article link */}
                <Link to={`/articles/${article._id}`} className="text-blue-500 hover:underline">
                  View Article
                </Link>


                {/* Delete Article button */}
                <button
                  onClick={() => handleDelete(article._id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete Article
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
