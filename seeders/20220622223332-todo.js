'use strict';

const { v4: uuidv4 } = require('uuid');

module.exports = {
  async up (queryInterface, Sequelize) {
    const now = new Date();
    await queryInterface.bulkInsert('Todo', [
      {id: uuidv4(), title:'hoge', deadline:'2022-07-01', createdAt: now, updatedAt: now},
      {id: uuidv4(), title:'hage', deadline:'2022-08-02', createdAt: now, updatedAt: now},
      {id: uuidv4(), title:'pepe', deadline:'2022-09-03', createdAt: now, updatedAt: now},
      {id: uuidv4(), title:'soya', deadline:'2022-10-04', createdAt: now, updatedAt: now},
      {id: uuidv4(), title:'enya', deadline:'2022-11-05', createdAt: now, updatedAt: now},
      {id: uuidv4(), title:'hoge', deadline:'2022-07-01', createdAt: now, updatedAt: now},
      {id: uuidv4(), title:'hage', deadline:'2022-08-02', createdAt: now, updatedAt: now},
      {id: uuidv4(), title:'pepe', deadline:'2022-09-03', createdAt: now, updatedAt: now},
      {id: uuidv4(), title:'soya', deadline:'2022-10-04', createdAt: now, updatedAt: now},
      {id: uuidv4(), title:'enya', deadline:'2022-11-05', createdAt: now, updatedAt: now},
      {id: uuidv4(), title:'hoge', deadline:'2022-07-01', createdAt: now, updatedAt: now},
      {id: uuidv4(), title:'hage', deadline:'2022-08-02', createdAt: now, updatedAt: now},
      {id: uuidv4(), title:'pepe', deadline:'2022-09-03', createdAt: now, updatedAt: now},
      {id: uuidv4(), title:'soya', deadline:'2022-10-04', createdAt: now, updatedAt: now},
      {id: uuidv4(), title:'enya', deadline:'2022-11-05', createdAt: now, updatedAt: now},
      {id: uuidv4(), title:'hoge', deadline:'2022-07-01', createdAt: now, updatedAt: now},
      {id: uuidv4(), title:'hage', deadline:'2022-08-02', createdAt: now, updatedAt: now},
      {id: uuidv4(), title:'pepe', deadline:'2022-09-03', createdAt: now, updatedAt: now},
      {id: uuidv4(), title:'soya', deadline:'2022-10-04', createdAt: now, updatedAt: now},
      {id: uuidv4(), title:'enya', deadline:'2022-11-05', createdAt: now, updatedAt: now},
      {id: uuidv4(), title:'hoge', deadline:'2022-07-01', createdAt: now, updatedAt: now},
      {id: uuidv4(), title:'hage', deadline:'2022-08-02', createdAt: now, updatedAt: now},
      {id: uuidv4(), title:'pepe', deadline:'2022-09-03', createdAt: now, updatedAt: now},
      {id: uuidv4(), title:'soya', deadline:'2022-10-04', createdAt: now, updatedAt: now},
      {id: uuidv4(), title:'enya', deadline:'2022-11-05', createdAt: now, updatedAt: now},
  ], {});
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Todo', null, {});
  }
};
