const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('arin_color', {
    cl_eng: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    cl_th: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'arin_color',
    timestamps: false
  });
};
