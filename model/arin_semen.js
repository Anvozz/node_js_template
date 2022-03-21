const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('arin_semen', {
    se_seq: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "ลำดับการรับ"
    },
    se_lotnum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "lotnumber รอบกลุ่มการรับน้ำเชื้อ"
    },
    se_cname: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "",
      comment: "ชื่อพ่อพัน"
    },
    se_cno: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "หมายเลขวัว ไม่สามารถเป็น key ไปหาวัวได้"
    },
    se_ctag: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "",
      comment: "tag วัวสามารถนำมา link พ่อพันธุ์ได้"
    },
    se_cbreed: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "",
      comment: "พันธุ์ของพ่อพันธุ์วัว"
    },
    se_breedcode: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: ""
    },
    se_prosite: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    se_julian: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: ""
    },
    se_product: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00"
    },
    se_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "จำนวนรับ"
    },
    se_pay: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "วันเวลาที่จ่าย"
    },
    se_receive: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "วันเวลาที่รับ"
    },
    se_userpay: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: ""
    },
    se_userreceive: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    se_station: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: ""
    },
    sp_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    se_balance: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    se_type: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1,
      comment: "1 : โค, 2 : กระบือ"
    }
  }, {
    sequelize,
    tableName: 'arin_semen',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "se_seq" },
        ]
      },
      {
        name: "arin_semen_index1",
        using: "BTREE",
        fields: [
          { name: "se_cname" },
        ]
      },
      {
        name: "arin_semen_index2",
        using: "BTREE",
        fields: [
          { name: "se_ctag" },
        ]
      },
      {
        name: "arin_semen_index3",
        using: "BTREE",
        fields: [
          { name: "se_julian" },
        ]
      },
      {
        name: "arin_semen_index4",
        using: "BTREE",
        fields: [
          { name: "se_station" },
        ]
      },
      {
        name: "exam_ind_arin_semen",
        using: "BTREE",
        fields: [
          { name: "se_seq" },
          { name: "se_station" },
        ]
      },
    ]
  });
};
