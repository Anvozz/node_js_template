const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('refreshtoken', {
    token: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    expiryDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'refreshtoken',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "token" },
        ]
      },
    ]
  });
};
