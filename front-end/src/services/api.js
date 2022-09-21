import axios from 'axios';

export const api = axios.create({
  baseURL: "http://localhost:3001",
});

export const getTasks = async () => {
  return api.get("task");
};

export const createTask = async (title, status, description) => {
  return api.post("task", { title, status, description });
};

export const updateTask = async (id, title, status, description) => {
  return api.patch(`task/${id}`, { title, status, description });
};

export const deleteTask = async (id) => {
  return api.delete(`task/${id}`);
};
