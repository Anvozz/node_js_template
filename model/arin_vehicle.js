const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('arin_vehicle', {
    vh_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    vh_station: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    vh_code: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    vh_brand: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    vh_engcode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    vh_bodcode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    vh_licenpl: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    vh_type: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    vh_status: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "1 : ใช้งาน, 0 : ไม่ใช้งาน"
    },
    vh_picture: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    vh_useins: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    vh_userin: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    vh_useupd: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vh_useup: {
      type: DataTypes.STRING(150),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'arin_vehicle',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "vh_id" },
        ]
      },
    ]
  });
};
