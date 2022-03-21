const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('arin_supply', {
    sp_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "id รหัสลำดับการตัดจ่าย"
    },
    wst_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "ประเภทครุภัณฑ์ที่ตัดจ่าย   อิง จากตาราง arin_wstock"
    },
    wst_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "รหัสอ้างอิงการขอเบิก  จากตาราง arin_wstock"
    },
    wst_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "",
      comment: "รายการที่ต้องการตัดจ่าย    อิงจากตาราง arin_wstock"
    },
    sp_pay_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "รหัสอ้างอิง id ของสิ่งที่ตัดจ่าย เช่น  id ของ semen จาก arin_3_tbl_semen_view"
    },
    sp_paydesc1: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "รายละเอียดสิ่งตัดจ่าย 1"
    },
    sp_paydesc2: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "รายละเอียดสิ่งตัดจ่าย 2"
    },
    sp_paynum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "จำนวนที่ตัดจ่าย"
    },
    sp_staff: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "เจ้าหน้าที่ผู้เลือกตัดจ่าย"
    },
    sp_staff_dt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00",
      comment: "วันเวลา ปรับปรุงข้อมูลของเจ้าหน้าที่"
    },
    sp_conf: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "สถานะการอนุมัติตัดจ่าย 0:เตรียมของรออนุมัติ, 1:ตัดจ่ายละลดสต็อคแล้ว"
    },
    sp_conf_dt: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "วันเวลา  อนุมัติตัดจ่ายและลดสต็อค"
    }
  }, {
    sequelize,
    tableName: 'arin_supply',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "sp_id" },
        ]
      },
    ]
  });
};
