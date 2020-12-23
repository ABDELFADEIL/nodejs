'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SingerStyles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  SingerStyles.init({
    SingerId: DataTypes.NUMBER,
    StyleId: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'SingerStyles',
  });
  return SingerStyles;
};