// xxxxx-AddProducts.js

'use strict';

// Reusable Description
const description = `Run it up the flag pole spinning our wheels. 
This is not the hill i want to die on digital literacy yet dear hiring manager: 
yet run it up the flagpole, ping the boss and circle back so service as core 
&innovations as power makes our brand globalize.`

const [ createdAt, updatedAt ] = [ new Date(), new Date() ]

module.exports = {

  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('Products', [
      { 
        id: 1, 
        title: 'Nike Womens Go FlyEase Shoe', 
        slug: 'nike-womens-go-flyease', 
        price: 89.78, 
        is_published: true,
        description, createdAt, updatedAt
      },
      { 
        id: 2, 
        title: 'Nike Mens Go FlyEase Shoe', 
        slug: 'nike-womens-go-flyease', 
        price: 89.78, 
        is_published: true,
        description, createdAt, updatedAt
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Products', null, {})
  }
};
