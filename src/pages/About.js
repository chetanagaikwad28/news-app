// src/pages/About.js
import React from 'react';

function About() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">About News App</h1>
      <p className="mt-4">
        This app provides the latest news articles on various topics. It’s built with React for the frontend and
        MongoDB for storing articles and user information.
      </p>
      <p className="mt-2">
        Stay tuned for updates, and feel free to reach out with any feedback!
      </p>
    </div>
  );
}

export default About;
