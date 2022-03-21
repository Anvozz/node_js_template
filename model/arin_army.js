const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('arin_army', {
    ar_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    ar_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'arin_army',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ar_id" },
        ]
      },
    ]
  });
};
