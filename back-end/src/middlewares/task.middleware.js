const { StatusCodes } = require('http-status-codes');

const verifyTaskName = (req, res, next) => {
  const { name } = req.body;

  if (!name || name.length === 0) {
    return res.status(StatusCodes.BAD_REQUEST).json({ message: '"name" is required' });
  }

  return next();
};

const verifyTaskStatus = (req, res, next) => {
  const { status } = req.body;

  if (!status || status.length === 0) {
    return res.status(StatusCodes.BAD_REQUEST).json({ message: '"status" is required' });
  }

  return next();
};

const taskMiddleware = { verifyTaskName, verifyTaskStatus };

module.exports = taskMiddleware;
