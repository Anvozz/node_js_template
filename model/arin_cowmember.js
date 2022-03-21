const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('arin_cowmember', {
    cm_station: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    cm_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "id รหัสใช้อ้างอิงวัว PK"
    },
    cm_certif: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cm_number: {
      type: DataTypes.STRING(17),
      allowNull: true,
      defaultValue: ""
    },
    cm_memid: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: ""
    },
    cm_type: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1,
      comment: "1 : โค, 2 : กระบือ"
    },
    cm_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    cm_nborn: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "0:ไม่ใช่ ,1:ใช่"
    },
    cm_brid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "link ไปยัง arin_breed(br_id)"
    },
    cm_semennum: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: ""
    },
    cm_breed: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    cm_perbreed: {
      type: DataTypes.FLOAT(3,2),
      allowNull: true
    },
    cm_bweigth: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cm_facode: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    cm_mocode: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    cm_faname: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cm_moname: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cm_dob: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00"
    },
    cm_sex: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1,
      comment: "1:male, 2:female"
    },
    cm_color: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    cm_picture: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cm_status: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1,
      comment: "1 ติดตาม : 2 ขาย : 3 ตาย"
    },
    cm_export: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "วันที่จำหน่ายออก ตาย ขาย"
    },
    cm_dtmake: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    cm_dtupdate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "0000-00-00 00:00:00"
    },
    cm_usupdate: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cm_nbnumber: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'arin_cowmember',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cm_id" },
        ]
      },
      {
        name: "arin_cowmember_index1",
        using: "BTREE",
        fields: [
          { name: "cm_station" },
        ]
      },
      {
        name: "arin_cowmember_index2",
        using: "BTREE",
        fields: [
          { name: "cm_memid" },
        ]
      },
    ]
  });
};
