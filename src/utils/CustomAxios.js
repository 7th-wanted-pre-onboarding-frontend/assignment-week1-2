import axios from 'axios';

const client = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
    'Content-Type': 'application/vnd.github+json'
  }
});

export default client;
