import axios from 'axios';

const taskAPI = axios.create({
  baseURL: "http://localhost:3000",
});

export default taskAPI;
