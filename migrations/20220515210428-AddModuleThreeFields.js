'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const isNull  = { allowNull: true }
    const notNull = { allowNull: false }
    const slug    = { type: Sequelize.STRING, ...notNull }
    const desc    = { type: Sequelize.TEXT('long'), defaultValue: 'No description was provided...', ...notNull }
    const str     = { type: Sequelize.STRING, ...isNull }
    const bool    = { type: Sequelize.BOOLEAN, ...notNull, defaultValue: false }
    const inv     = { type: Sequelize.INTEGER, ...notNull, defaultValue: 0 }
    /*
      Products.js changes
    */
    await queryInterface.addColumn('Products', 'slug', slug)
    await queryInterface.addColumn('Products', 'description', desc)
    await queryInterface.addColumn('Products', 'is_published', bool)

    /*
      Variant.js changes
    */
    await queryInterface.addColumn('Variants', 'slug', str)
    await queryInterface.addColumn('Variants', 'description', desc)
    await queryInterface.addColumn('Variants', 'inventory', inv)
  },

  async down (queryInterface, Sequelize) {
    /*
      Products.js undo changes
    */
    await queryInterface.removeColumn('Products', 'slug')
    await queryInterface.removeColumn('Products', 'description')
    await queryInterface.removeColumn('Products', 'is_published')

    /*
      Variant.js undo changes
    */
    await queryInterface.removeColumn('Variants', 'slug')
    await queryInterface.removeColumn('Variants', 'description')
    await queryInterface.removeColumn('Variants', 'inventory')
  }
};
