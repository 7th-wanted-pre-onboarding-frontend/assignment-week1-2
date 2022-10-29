import axios from 'axios';

const client = axios.create({
  baseURL:
    'https://api.github.com/repos/angular/angular-cli/issues?sort=comments&per_page=1&direction=asc',
  headers: {
    authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
    'Content-Type': 'application/vnd.github+json'
  }
});

export default client;
