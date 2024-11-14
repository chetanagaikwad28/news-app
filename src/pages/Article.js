// src/pages/Article.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../api/axiosInstance';

function Article() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    axiosInstance.get(`/articles/${id}`)
      .then(response => setArticle(response.data))
      .catch(error => console.error('Error fetching article:', error));
  }, [id]);

  if (!article) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">{article.title}</h1>
      <p className="mt-2 text-gray-600">{article.date}</p>
      <p className="mt-4">{article.content}</p>
    </div>
  );
}

export default Article;
