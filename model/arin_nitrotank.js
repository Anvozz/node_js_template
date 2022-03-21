const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('arin_nitrotank', {
    tk_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tk_code: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ""
    },
    tk_size: {
      type: DataTypes.DECIMAL(4,1),
      allowNull: false,
      defaultValue: 0.0
    },
    tk_type: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "service",
      comment: "service,bank,store"
    },
    tk_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "1:ใช้งาน,0:ไม่ใช้งาน,2:ชำรุด,3:รอจำหน่วย"
    },
    tk_station: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tk_picture: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tk_useint: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    tk_userin: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tk_useupd: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    tk_useup: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'arin_nitrotank',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "tk_id" },
        ]
      },
      {
        name: "tk_nitrotank",
        using: "BTREE",
        fields: [
          { name: "tk_code" },
        ]
      },
    ]
  });
};
