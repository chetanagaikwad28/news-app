// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Article from './pages/Article';
import About from './pages/About';
import Contact from './pages/Contact';
import CreateArticle from './pages/CreateArticle';
import ArticleDetails from './pages/ArticleDetails'; // Import the new page


function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-100">
        
        {/* Header */}
        <header className="bg-blue-600 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">News Web App</h1>
            <nav className="space-x-4">
              <Link to="/" className="hover:underline">Home</Link>
              <Link to="/about" className="hover:underline">About</Link>
              <Link to="/contact" className="hover:underline">Contact</Link>
              <Link to="/create-article" className="hover:underline">New Article</Link>
            </nav>
          </div>
        </header>
        
        {/* Main Content */}
        <div className="flex flex-1">
  

          {/* Main Content Area */}
          <main className="flex-1 p-6 container mx-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/article/:id" element={<Article />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/create-article" element={<CreateArticle />} />
              <Route path="/articles/:id" element={<ArticleDetails />} /> {/* Dynamic route */}
            </Routes>
          </main>
          
        </div>

        {/* Footer */}
        <footer className="bg-blue-600 text-white p-4">
          <div className="container mx-auto text-center">
            <p>&copy; {new Date().getFullYear()} News Web App. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
