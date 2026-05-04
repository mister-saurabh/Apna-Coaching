import axios from 'axios';

const API = axios.create({
  baseURL: '/api',
  headers: { 'Content-Type': 'application/json' }
});

API.interceptors.request.use(config => {
  const token = localStorage.getItem('3tpna_admin_token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default API;
