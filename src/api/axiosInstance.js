import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://news-backend-w6c2.onrender.com/api', // Adjust this URL based on your backend server configuration
});

export default axiosInstance;
