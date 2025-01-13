import axios from 'axios';

// Base Axios instance
const api = axios.create({
  baseURL: 'http://BACKEND_SERVER_IP:PORT', // Replace with your backend server's URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Example of a reusable API call for fetching users
export const getUsers = async () => {
  try {
    const response = await api.get('/users');
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

// Example of a reusable API call for creating a user
export const createUser = async (userData) => {
  try {
    const response = await api.post('/users', userData);
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

export default api;
