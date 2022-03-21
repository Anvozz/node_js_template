const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('arin_withdraw_type', {
    wt_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    wt_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'arin_withdraw_type',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "wt_id" },
        ]
      },
    ]
  });
};
