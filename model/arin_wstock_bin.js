const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('arin_wstock_bin', {
    wst_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "ลำดับข้อมูลขอเบิก"
    },
    wd_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "id ใบเบิกจากตาราง arin_withdraw"
    },
    wst_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "ประเภทครุภัณฑ์   รอปรับปรุง"
    },
    wst_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "",
      comment: "ครุภัณฑ์ที่ต้องการ"
    },
    wst_unit: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "",
      comment: "หน่วยครุภัณฑ์ที่ขอเบิก"
    },
    wst_want: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "จำนวนที่ขอเบิก"
    },
    wst_prove: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "ยอดที่ ผอ.สทพ.อนุมัติ"
    },
    wst_pay: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "จำนวนจ่ายจริง"
    },
    wst_stat: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "สถานะการดำเนินงานของรายการ 0:กำลังดำเนินการ, 1:ทราบ, 2:แก้ไข, 3:ปฏิเสธ, 4:อนุมัติ"
    },
    wst_dt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "วดป ที่ปรับปรุงข้อมูล"
    },
    wst_staff: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'arin_wstock_bin',
    timestamps: false
  });
};
