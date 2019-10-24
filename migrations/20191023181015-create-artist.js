'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('artists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      songKickArtistId: {
        type: Sequelize.INTEGER
      },
      displayName: {
        type: Sequelize.STRING
      },
      onTourUntil: {
        type: Sequelize.INTEGER
      },
      interestLevel: {
        type: Sequelize.INTEGER,
        defaultValue: 5
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('artists');
  }
};