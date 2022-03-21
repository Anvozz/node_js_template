const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('arin_cowstate', {
    stu_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    stu_desc: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'arin_cowstate',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "stu_id" },
        ]
      },
    ]
  });
};
