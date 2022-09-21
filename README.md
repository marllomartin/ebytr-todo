# Ebytr ToDo
<div align="center">
<img src=https://i.imgur.com/F9WoZ9S.png width="250px">
</div>

## Sobre
Aplicação full stack de uma lista de tarefas simples desenvolvida pro desafio técnico da empresa fictícia Ebytr, organizada durante o evento de Blitz de Carreira da [Trybe](https://www.betrybe.com/).

<div align="center">
<img src=https://i.imgur.com/3MpfU57.png>
</div>

## Funcionalidades
- Exibir tarefas existentes;
- Adicionar uma nova tarefa;
- Filtrar exibição de tarefas por título ou por status;
- Atualizar tarefas existentes;
- Deletar tarefas


## Aprendizados

#### Back-End

  * Planejamento de um CRUD com Node.js;

  * Métodos HTTP;

  * Permitir o consumo do Back-End com a utilização do **CORS**;

  * Estruturação de uma API no padrão de camadas MSC (Model, Service, Controller);

  * Organização do banco de dados utilizando o Sequelize;

#### Front-End

   * Estilização de componentes React utilizando a biblioteca Styled Components;
    
   * Consumir uma API utilizando o **Axios**;

   * Organização do Context do React para um maior aproveitamento de código entre múltiplos componentes;

   * Configuração de Hooks personalizados no React;


## Tecnologias Utilizadas
* [Docker](https://www.docker.com/)
### Back-End
* [MySQL](https://www.mysql.com/)
* [Sequelize](https://sequelize.org/)
* [Node.js](https://nodejs.org/en/)
  * [Express](https://expressjs.com/pt-br/)
  * [CORS](https://www.npmjs.com/package/cors)
  * [HTTP-Status-Codes](https://www.npmjs.com/package/http-status-codes)


### Front-End
* [React](https://reactjs.org/)
  * [React Icons](https://react-icons.github.io/react-icons/)
  * [Styled Components](https://styled-components.com/)
  * [Axios](https://axios-http.com/ptbr/docs/intro)

## Rodando o projeto com o Docker (recomendado)

### Clonando o projeto:
```
git clone git@github.com:marllomartin/ebytr-todo.git

cd ebytr-todo
```
### Inicializando o Docker
```
docker-compose up --build
```

## Rodando o projeto localmente

### Clonando o projeto:
```
git clone git@github.com:marllomartin/ebytr-todo.git

cd ebytr-todo
```


### Inicializando o Back-End:
#### Atenção!
O Back-End do projeto utiliza variáveis de ambiente. Renomeie o arquivo `.env.example` para `.env` e altere os valores de acordo com suas próprias configurações.

#### Mudando para a pasta de Back-End:
```
cd back-end
```
#### Instalando as dependências:
```
npm install
```
#### Inicializando o Banco de Dados com Sequelize:
```
npx sequelize db:create
```
#### Executando as Migrations do Banco de Dados com Sequelize:
```
npx sequelize db:migrate
```
#### Populando o Banco de Dados com Sequelize:
```
npx sequelize db:seed:all
```
#### Rodando o Back-End:
```
npm run dev
```

### Inicializando o Front-End:
#### Mudando para a pasta de Front-End:
```
cd front-end
```
#### Instalando as dependências:
```
npm install
```
#### Rodando o Front-End:
```
npm start
```

## Referências

A [série de vídeos](https://youtube.com/playlist?list=PL8YNlUoOZkkY8wjaI2t8DfvysoysmMLCv) do [Huriel Lopes](https://github.com/huri3l) serviu de uma ajuda extraordinária para o estudo do Axios e da biblioteca de Styled Components.
