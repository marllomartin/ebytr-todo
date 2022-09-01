const { StatusCodes } = require('http-status-codes');
const taskService = require('../services/task.service');

const getAll = async (_req, res) => {
  try {
    const result = await taskService.getAll();

    return res.status(StatusCodes.OK).send(result);
  } catch (Error) {
    return res.status(StatusCodes.NOT_FOUND).send({ message: Error.message });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await taskService.getById(id);

    return res.status(StatusCodes.OK).send(result);
  } catch (Error) {
    return res.status(StatusCodes.NOT_FOUND).send({ message: Error.message });
  }
};

const create = async (req, res) => {
  const newTask = req.body;

  try {
    const result = await taskService.create(newTask);

    return res.status(StatusCodes.CREATED).send(result);
  } catch (Error) {
    return res.status(StatusCodes.NOT_FOUND).send({ message: Error.message });
  }
};

const deleteById = async (req, res) => {
  const { id } = req.params;

  try {
    await taskService.deleteById(id);

    return res.status(StatusCodes.OK).json({ message: `Task of ID ${id} successfully deleted` });
  } catch (Error) {
    return res.status(StatusCodes.NOT_FOUND).send({ message: Error.message });
  }
};

const updateById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    await taskService.updateById(id, data);

    return res.status(StatusCodes.OK).json({ message: 'Task updated' });
  } catch (Error) {
    return res.status(StatusCodes.NOT_FOUND).send({ message: Error.message });
  }
};

const taskController = {
  getAll, getById, create, deleteById, updateById,
};

module.exports = taskController;
