'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Variant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Variant.hasMany(models.Image)
      models.Variant.belongsTo(models.Product)
    }
  }
  Variant.init({
    title: DataTypes.STRING,
    price: DataTypes.FLOAT,
    slug: DataTypes.STRING,
    description: DataTypes.TEXT('long'),
    inventory: DataTypes.INTEGER,
    productId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Variant',
  });
  return Variant;
};