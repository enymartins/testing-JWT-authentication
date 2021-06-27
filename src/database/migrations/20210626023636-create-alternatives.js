'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Alternatives', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      question_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Questions', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      content: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      isCorrect: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE(3),
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE(3),
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)'),
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Alternatives');
  }
};