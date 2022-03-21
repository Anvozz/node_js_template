const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('arin_district', {
    district_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    district_code: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    district_name: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: ""
    },
    postcode: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: ""
    },
    geo_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    province_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'arin_district',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "district_id" },
        ]
      },
    ]
  });
};
