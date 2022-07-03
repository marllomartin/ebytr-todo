require('dotenv').config();
const app = require('./app');

const { getAll, getById } = require('./controllers/task.controller');

const port = process.env.PORT

app.get('/task', getAll);
app.get('/task/:id', getById);

app.listen(port, () => console.log('Ouvindo porta', port));
