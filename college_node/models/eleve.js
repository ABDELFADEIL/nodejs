'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Eleve extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Eleve.belongsTo(models.Class)
      Eleve.belongsToMany(models.Cours, {through: models.EleveCours})
      Eleve.hasMany(models.EleveCours)

    }
  };
  Eleve.init({
    name: DataTypes.STRING,
    age: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Eleve',
  });
  return Eleve;
};