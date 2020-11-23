import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost/macaw_app_api/',
});

export default api;