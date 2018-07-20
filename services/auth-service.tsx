import axios from 'axios';

const login = (email, password) => {
  const endpoint = 'http://localhost:3000/';
  return axios.get(endpoint, {
    params: {
      email: email,
      password: password,
    }
  })
}

export default {
  login,
}