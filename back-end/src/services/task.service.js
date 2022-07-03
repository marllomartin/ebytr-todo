const { Task } = require('../database/models');

const getAll = async () => {
  const tasks = await Task.findAll();

  if (!tasks || tasks.length === 0) {
    throw new Error('No tasks found');
  }

  return tasks;
}

const getById = async (id) => {
  const task = await Task.findByPk(id);

  if (!task) {
    throw new Error('No task found');
  }

  return task
}

module.exports = { getAll, getById };
