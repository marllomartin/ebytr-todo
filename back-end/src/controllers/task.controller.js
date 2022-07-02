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

module.exports = { getAll };
