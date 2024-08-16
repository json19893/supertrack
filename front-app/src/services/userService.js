import axios from 'axios';

const API_URL ="http://localhost:8000/auth";

const getUsers = () => {
  return axios.get(`${API_URL}/users`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
};

const getUserById = (id) => {
  return axios.get(`${API_URL}/users/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
};

const addUser = (userData) => {
  return axios.post(`${API_URL}/users`, userData, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
};

const updateUser = (id, userData) => {
  return axios.put(`${API_URL}/users/${id}`, userData, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
};

const deleteUser = (id) => {
  return axios.delete(`${API_URL}/users/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
};

export default {
  getUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
};
