import axios from 'axios';

const API_KEY = import.meta.env.VITE_SUPABASE_APIKEY;

const BASE_URL =
  import.meta.env.MODE === 'development'
    ? import.meta.env.VITE_BASE_URL_DEV
    : import.meta.env.VITE_BASE_URL_PROD;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    apikey: API_KEY,
  },
});
export default axiosInstance;
