import React, { useEffect, useState } from 'react';
import axiosInstance from '../api/axiosInstance';

function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axiosInstance.get('/articles')
      .then(response => setArticles(response.data))
      .catch(error => console.error('Error fetching articles:', error));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">News Articles</h1>
      <ul>
        {articles.map(article => (
          <li key={article._id} className="mt-4">
            <h2 className="text-xl">{article.title}</h2>
            <p>{article.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
