import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api', // Adjust this URL based on your backend server configuration
});

export default axiosInstance;
