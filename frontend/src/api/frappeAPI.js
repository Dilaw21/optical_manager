import axios from 'axios';

const frappeAPI = axios.create({
  baseURL: '/', // Points to local dev proxy or relative path in production
  withCredentials: true,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

export default frappeAPI;