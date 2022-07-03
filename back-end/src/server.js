require('dotenv').config();
const app = require('./app');

const taskController = require('./controllers/task.controller');
const taskMiddleware = require('./middlewares/task.middleware');

const { getAll, getById, create, deleteById, updateStatusById } = taskController;
const { verifyTaskName, verifyTaskStatus } = taskMiddleware;

const port = process.env.PORT;

app.get('/task', getAll);
app.get('/task/:id', getById);
app.post('/task', verifyTaskName, verifyTaskStatus, create);
app.delete('/task/:id', deleteById);
app.put('/task/:id', verifyTaskStatus, updateStatusById)

app.listen(port, () => console.log('Ouvindo porta', port));
