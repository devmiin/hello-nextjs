import axios from 'axios';

const getUser = (jwt, id) => {
  const endpoint = 'http://localhost:3000';
  const config = {
    headers: { Authorization: `Bearer ${jwt}` }
  }
  return axios.get(`${endpoint}/users/${id}`, config)
}

const getCurrentUser = (jwt) => {
  const endpoint = 'http://localhost:3000';
  const config = {
    headers: { Authorization: `Bearer ${jwt}` }
  }
  return axios.get(`${endpoint}/users`, config)
}

export default {
  getUser,
  getCurrentUser
}