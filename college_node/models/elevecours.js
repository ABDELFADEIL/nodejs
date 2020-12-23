'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EleveCours extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  EleveCours.init({
    EleveId: DataTypes.INTEGER,
    CoursId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'EleveCours',
  });
  return EleveCours;
};