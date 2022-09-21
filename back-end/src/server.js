require('dotenv').config();
const app = require('./app');

const taskController = require('./controllers/task.controller');
const taskMiddleware = require('./middlewares/task.middleware');

const {
  getAll, create, deleteById, updateById,
} = taskController;
const { verifyTaskTitle, verifyTaskStatus } = taskMiddleware;

const port = process.env.PORT;

app.get('/task', getAll);
app.post('/task', verifyTaskTitle, verifyTaskStatus, create);
app.delete('/task/:id', deleteById);
app.patch('/task/:id', verifyTaskTitle, verifyTaskStatus, updateById);

app.listen(port, () => console.log('Ouvindo porta', port));
