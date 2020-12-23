'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Annonce extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Annonce.belongsTo(models.Agent)
      Annonce.belongsTo(models.Bien, { 
        foreignKey: 'BienId', 
        as: 'biens' 
      })
    }
  };
  Annonce.init({
    dateDebutVente: DataTypes.DATE,
    dateFinVente: DataTypes.DATE,
    statutVente: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Annonce',
  });
  return Annonce;
};