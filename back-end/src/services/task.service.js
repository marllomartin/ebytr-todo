const { Task } = require('../database/models');

const getAll = async () => {
  const tasks = await Task.findAll();

  return tasks;
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

const updateById = async (id, data) => {
  const task = await Task.findByPk(id);

  if (!task) {
    throw new Error('Task not found');
  }

  await Task.update(data, { where: { id } });

  return { id, data };
};

module.exports = {
  getAll, create, deleteById, updateById,
};
