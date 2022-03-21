const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('arin_month', {
    mn_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    mn_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    mn_sname: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: ""
    },
    mn_seq: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'arin_month',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "mn_id" },
        ]
      },
    ]
  });
};
