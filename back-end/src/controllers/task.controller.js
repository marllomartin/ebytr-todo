const taskService = require('../services/task.service');
const { StatusCodes } = require('http-status-codes');

const getAll = async (_req, res) => {
  try {
    const result = await taskService.getAll();

    return res.status(StatusCodes.OK).send(result);
  } catch (Error) {
    return res.status(StatusCodes.NOT_FOUND).send({ message: Error.message });
  }
}

const getById = async (req, res) => {
  const { id } = req.params;

  try { 
    const result = await taskService.getById(id);

    return res.status(StatusCodes.OK).send(result);
  } catch (Error) {
    return res.status(StatusCodes.NOT_FOUND).send({ message: Error.message });
  }
}

const create = async (req, res) => {
  const newTask = req.body;

  try {
    const result = await taskService.create(newTask);

    return res.status(StatusCodes.CREATED).send(result);
  } catch (Error) {
    return res.status(StatusCodes.NOT_FOUND).send({ message: Error.message });
  }
}

module.exports = { getAll, getById, create };
