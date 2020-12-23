'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cours extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cours.belongsToMany(models.Eleve, {through: models.EleveCours})
      Cours.hasMany(models.EleveCours);

      Cours.belongsToMany(models.Notes, {through: models.NotesCours})
      Cours.hasMany(models.NotesCours);

    }
  };
  Cours.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cours',
  });
  return Cours;
};