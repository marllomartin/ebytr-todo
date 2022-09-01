'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Tasks',
    [
      {
        title: 'Tarefa 1',
        description: 'Essa é a primeira tarefa',
        status: 'Pendente',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'Tarefa 2',
        description: 'Essa é a segunda tarefa',
        status: 'Em andamento',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'Tarefa 3',
        description: 'Essa é a terceira tarefa',
        status: 'Concluído',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Tasks', null, {}),
};
