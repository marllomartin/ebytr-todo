# Ebytr ToDo

## Sobre
Aplicação full stack de uma lista de tarefas simples desenvolvida pro desafio técnico da empresa fictícia Ebytr, organizada durante o evento de Blitz de Carreira da [Trybe](https://www.betrybe.com/).

Nela, o usuário é capaz de salvar tarefas e seus respectivos status (Pendente, Em andamento ou Concluída), assim como editar o nome e o status de tarefas já existentes ou deletá-las.


## Aprendizados

#### Back-End

  * Planejamento de um CRUD com Node.js;

  * Métodos HTTP;

  * Permitir o consumo do Back-End com a utilização do **CORS**;

  * Organização no padrão de camadas MSC (Model, Service, Controller);

  * Estruturação de uma API utilizando o Sequelize;

#### Front-End

   * Estilização de componentes React utilizando a biblioteca Styled Components;
    
   * Consumir uma API utilizando o **Axios**;

   * Organização do Context do React para um maior aproveitamento de código entre múltiplos componentes;

   * Configuração de Hooks personalizados no React;

   * Utilizar o **SWR** para melhorar o consumo de dados em aplicações React;


## Tecnologias Utilizadas

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
  * [SWR](https://swr.vercel.app/pt-BR)

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
#### Mudando para a pasta de Back-End:
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

A [série de vídeos](https://youtube.com/playlist?list=PL8YNlUoOZkkY8wjaI2t8DfvysoysmMLCv) do [Huriel Lopes](https://github.com/huri3l) serviu de uma ajuda extraordinária para o estudo, entendimento e configuração do Axios, SWR, Hooks Personalizados e da biblioteca de Styled Components.
