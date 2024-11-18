import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axiosInstance from '../api/axiosInstance';

function Article() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance.get(`/articles/${id}`)
      .then((response) => setArticle(response.data))
      .catch((error) => console.error("Error fetching article:", error));
  }, [id]);

  const handleDelete = () => {
    setIsDeleting(true);
    axiosInstance.delete(`/articles/${id}`)
      .then(() => {
        console.log("Article deleted successfully.");
        navigate('/');
      })
      .catch((error) => {
        console.error("Error deleting article:", error);
        if (error.response?.status === 404) {
          alert("The article you are trying to delete does not exist.");
        } else {
          alert("An unexpected error occurred. Please try again later.");
        }
      })
      .finally(() => setIsDeleting(false));
  };
  
  console.log("Article ID:", id);


  if (!article) return <p>Loading...</p>;

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
      <h2 className="text-3xl font-bold text-blue-600">{article.title}</h2>
      <p className="mt-4 text-gray-700">{article.content}</p>
      <button
        onClick={handleDelete}
        className={`mt-6 py-2 px-4 rounded-lg ${
          isDeleting ? 'bg-gray-400' : 'bg-red-500 hover:bg-red-600'
        } text-white`}
        disabled={isDeleting}
      >
        {isDeleting ? 'Deleting...' : 'Delete Article'}
      </button>
    </div>
  );
}

export default Article;