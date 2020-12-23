'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Subjects', [{
      name: 'Francais',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Maths',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Histoire',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Biologie',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Subjects', null, {})
  }
};
