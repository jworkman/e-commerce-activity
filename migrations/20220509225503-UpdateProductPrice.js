'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.changeColumn('Products', 'price', {
      type: Sequelize.FLOAT,
      defaultValue: 0.00,
      allowNull: false
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.changeColumn('Products', 'price', {
      type: Sequelize.INTEGER,
      defaultValue: 0,
      allowNull: false
    })
  }
};
