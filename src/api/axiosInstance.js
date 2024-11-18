import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://news-backend-zwdb.onrender.com/api', // Adjust this URL based on your backend server configuration
});

// Function to get all articles
export const getArticles = async () => {
  try {
    const response = await axiosInstance.get('/articles');
    return response.data;
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
};

// Function to get a single article by ID
export const getArticleById = async (id) => {
  try {
    const response = await axiosInstance.get(`/articles/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching article by ID:", error);
    throw error;
  }
};


// Function to create a new article
export const createArticle = async (articleData) => {
  try {
    const response = await axiosInstance.post('/articles', articleData);
    return response.data;
  } catch (error) {
    console.error("Error creating article:", error);
    throw error;
  }
};

// Function to update an article
export const updateArticle = async (id, articleData) => {
  try {
    const response = await axiosInstance.put(`/articles/${id}`, articleData);
    return response.data;
  } catch (error) {
    console.error("Error updating article:", error);
    throw error;
  }
};

// Function to delete an article
export const deleteArticle = async (id) => {
  try {
    const url = `/articles/${id}`;
    console.log(`Attempting to delete article at: ${url}`); // Log the URL being accessed
    const response = await axiosInstance.delete(url);
    return response.data; // Success message from the backend
  } catch (error) {
    console.error("Error deleting article:", error);
    throw error; // Handle the error if the delete operation fails
  }
};

// Function to get all comments for a specific article
export const getCommentsByArticleId = async (articleId) => {
  try {
    const response = await axiosInstance.get(`/comments/article/${articleId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching comments:", error);
    throw error;
  }
};

// Function to create a new comment for an article
export const createComment = async (commentData) => {
  try {
    const response = await axiosInstance.post('/comments', commentData);
    return response.data;
  } catch (error) {
    console.error("Error creating comment:", error);
    throw error;
  }
};

// Function to delete a comment
export const deleteComment = async (id) => {
  try {
    const response = await axiosInstance.delete(`/comments/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting comment:", error);
    throw error;
  }
};

// Fetch article details
export const getArticleDetails = async (id) => {
  const response = await axiosInstance.get(`/articles/${id}`);
  return response.data;
};

// Function to get all users (optional if you need this)
export const getUsers = async () => {
  try {
    const response = await axiosInstance.get('/users');
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export default axiosInstance;