const { Task } = require('../database/models');

const getAll = async () => {
  const tasks = await Task.findAll();

  if (!tasks || tasks.length === 0) {
    throw new Error('No tasks found');
  }

  return tasks;
};

const getById = async (id) => {
  const task = await Task.findByPk(id);

  if (!task) {
    throw new Error('No task found');
  }

  return task;
};

const create = async (newTask) => {
  await Task.create(newTask);

  return newTask;
};

const deleteById = async (id) => {
  const task = await Task.findByPk(id);

  if (task) {
    await Task.destroy({ where: { id } });

    return { id };
  }

  throw new Error('Task not found');
};

const updateTaskById = async (id, name, status) => {
  const task = await Task.findByPk(id);

  if (!task) {
    throw new Error('Task not found');
  }

  await Task.update({ name, status }, { where: { id } });

  return { id, status };
};

module.exports = {
  getAll, getById, create, deleteById, updateTaskById,
};
