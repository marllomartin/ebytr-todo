require('dotenv').config();
const app = require('./app');

const { getAll } = require('./controllers/task.controller');

const port = process.env.PORT

app.get('/task', getAll);

app.listen(port, () => console.log('Ouvindo porta', port));
