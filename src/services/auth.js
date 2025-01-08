import axios from 'axios';
import jwtDecode from 'jwt-decode';

const authApi = axios.create({
  baseURL: 'https://your-backend-url/auth',
});

export const login = async (credentials) => {
  const response = await authApi.post('/login', credentials);
  const token = response.data.token;
  localStorage.setItem('token', token);
  return jwtDecode(token);
};

export const logout = () => {
  localStorage.removeItem('token');
};

export const getCurrentUser = () => {
  try {
    const token = localStorage.getItem('token');
    return jwtDecode(token);
  } catch (error) {
    return null;
  }
};
