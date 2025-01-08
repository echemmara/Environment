import axios from 'axios';

const api = axios.create({
  baseURL: 'https://your-backend-url/api',
});

export const getProducts = () => api.get('/products');
export const getUserProfile = (userId) => api.get(`/users/${userId}`);
export const createOrder = (orderData) => api.post('/orders', orderData);

export default api;
