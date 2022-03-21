const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('arin_township', {
    township_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    township_code: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: ""
    },
    township_name: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: ""
    },
    district_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    province_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    geo_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'arin_township',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "township_id" },
        ]
      },
    ]
  });
};
