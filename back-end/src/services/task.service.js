const { Task } = require('../database/models');

const getAll = async () => {
  const tasks = await Task.findAll();

  if (!tasks || tasks.length === 0) {
    throw new Error('No tasks found');
  }

  return tasks;
}

module.exports = { getAll };
