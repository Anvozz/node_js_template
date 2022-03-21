const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('arin_rank', {
    rank_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    rank_name: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    rank_namefull: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    rank_level: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rank_army: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'arin_rank',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "rank_id" },
        ]
      },
    ]
  });
};
