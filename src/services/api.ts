import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.116/macaw_app_api/',
});

export default api;