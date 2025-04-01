import axios from 'axios';

const API_BASE_URL =
  process.env.EXPO_PUBLIC_API_BASE_URL ||
  'https://gkzr4tf7-5000.brs.devtunnels.ms';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export default api;
