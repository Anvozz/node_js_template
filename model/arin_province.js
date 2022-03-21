const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('arin_province', {
    province_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    province_code: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: ""
    },
    province_name: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: ""
    },
    geo_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'arin_province',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "province_id" },
        ]
      },
    ]
  });
};
