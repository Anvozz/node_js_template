const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('arin_vehicle_type', {
    vh_code: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    vh_desc: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'arin_vehicle_type',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "vh_code" },
        ]
      },
    ]
  });
};
