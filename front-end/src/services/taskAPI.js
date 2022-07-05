import axios from 'axios';

const taskAPI = axios.create({
  baseURL: "http://localhost:3001",
});

export default taskAPI;
