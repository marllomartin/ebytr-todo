require('dotenv').config();
const app = require('./app');

const port = process.env.PORT

app.get('/', (_request, response) => {
  response.send();
});

app.listen(port, () => console.log('Ouvindo porta', port));
