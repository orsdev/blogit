import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BLOGIT_DB_URL,
  timeout: 10000, //wait for 10 seconds
  headers: {
    'Content-Type': 'Application/json'
  }
});

export default axiosInstance;
