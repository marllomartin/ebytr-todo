const { StatusCodes } = require('http-status-codes');

const verifyTaskTitle = (req, res, next) => {
  const { title } = req.body;

  if (!title || title.length === 0) {
    return res.status(StatusCodes.BAD_REQUEST).json({ message: '"title" is required' });
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

const taskMiddleware = { verifyTaskTitle, verifyTaskStatus };

module.exports = taskMiddleware;
