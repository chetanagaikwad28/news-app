// src/pages/CreateArticle.js
import React, { useState } from 'react';
import axiosInstance from '../api/axiosInstance';

function CreateArticle() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosInstance.post('/articles', { title, content })
      .then(() => {
        setTitle('');
        setContent('');
        alert('Article created successfully!');
      })
      .catch(error => console.error('Error creating article:', error));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Create New Article</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Content</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateArticle;
