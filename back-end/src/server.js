require('dotenv').config();
const app = require('./app');

const { getAll, getById, create, deleteById } = require('./controllers/task.controller');

const port = process.env.PORT

app.get('/task', getAll);
app.get('/task/:id', getById);
app.post('/task', create);
app.delete('/task/:id', deleteById);

app.listen(port, () => console.log('Ouvindo porta', port));
