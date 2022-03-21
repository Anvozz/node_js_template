const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('arin_nitrotank_type', {
    tk_key: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    tk_desc: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'arin_nitrotank_type',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "tk_key" },
        ]
      },
    ]
  });
};
