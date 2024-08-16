import axios from 'axios';

const API_URL ="http://localhost:8000/auth";

const login = async (credentials) => {
  const response = await axios.post(`${API_URL}/login`, credentials);
  localStorage.setItem('token', response.data.token);
};

const logout = () => {
  localStorage.removeItem('token');
};

const getCurrentUser = () => {
  return axios.get(`${API_URL}/me`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
};

export default {
  login,
  logout,
  getCurrentUser,
};
