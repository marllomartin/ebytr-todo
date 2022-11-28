# Ebytr ToDo

<div align="center">
<img src=https://i.imgur.com/3MpfU57.png>
</div>

## About
Full stack single page application of a task organizer developed for the Career Blitz event hosted by [Trybe](https://www.betrybe.com/) on 21/06/2022.

## Features
- Visualize existing tasks;
- Add a new task;
- Search tasks by title or by status;
- Update existing tasks names, descriptions and statuses;
- Delete existing tasks;


## Learnings

   * Developing a containerized application using Docker.

#### Front-End

   * Mobile first web development;

   * Styling React components with Styled Components library;
    
   * API integration using Axios;

   * Setting React Context for better code utility;
   
#### Back-End

  * Allowing Back-End consuming using CORS;

  * Structuring an API using REST architecture;

  * Organizing database using Sequelize ORM;


## Technologies Used
* [JavaScript](https://www.javascript.com/)
* [Docker](https://www.docker.com/)
### Front-End
* [React](https://reactjs.org/)
  * [React Icons](https://react-icons.github.io/react-icons/)
  * [Styled Components](https://styled-components.com/)
  * [Axios](https://axios-http.com/ptbr/docs/intro)

### Back-End
* [MySQL](https://www.mysql.com/)
* [Sequelize](https://sequelize.org/)
* [Node.js](https://nodejs.org/en/)
  * [Express](https://expressjs.com/pt-br/)
  * [CORS](https://www.npmjs.com/package/cors)
  * [HTTP-Status-Codes](https://www.npmjs.com/package/http-status-codes)

## Running project with Docker (recommended)

### Cloning project:
```
git clone git@github.com:marllomartin/ebytr-todo.git

cd ebytr-todo
```
### Building Docker
```
docker-compose up --build
```

## Running project locally

### Cloning project:
```
git clone git@github.com:marllomartin/ebytr-todo.git

cd ebytr-todo
```


### Running Back-End:
#### Attention!
The Back-End of this project has environment variables. Rename the `.env.example` file to `.env` and set its values accordingly to your own settings. 

#### Changing to Back-End directory:
```
cd back-end
```
#### Installing dependencies:
```
npm install
```
#### Creating database with Sequelize:
```
npx sequelize db:create
```
#### Running Sequelize migrations:
```
npx sequelize db:migrate
```
#### Seeding database with Sequelize:
```
npx sequelize db:seed:all
```
#### Running Back-End:
```
npm run dev
```

### Running Front-End:
#### Changing to Front-End directory:
```
cd front-end
```
#### Installing dependencies:
```
npm install
```
#### Running Front-End:
```
npm start
```

## References

The [video tutorials](https://youtube.com/playlist?list=PL8YNlUoOZkkY8wjaI2t8DfvysoysmMLCv) made by [Huriel Lopes](https://github.com/huri3l) was very helpful for the better understanding and study of Axios and Styled Components library.
