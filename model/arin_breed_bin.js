const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('arin_breed_bin', {
    br_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "ลำดับ และ id การให้บริการผสมเทียม"
    },
    br_dt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "วันเวลาที่ลงข้อมูล"
    },
    br_certif: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    br_memid: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: "",
      comment: "รหัสสมาชิก"
    },
    br_cmid: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: "0",
      comment: "id วัว"
    },
    br_semen: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "id หลอดน้ำเชื้อ"
    },
    br_stationid: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "",
      comment: "สถานีผสมเทียม"
    },
    br_round: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: "รอบการผสมเทียม"
    },
    br_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: "0:ไม่สำเร็จ,1:รอยืนยันการท้อง,2:ตั้งท้อง,3:คอดแล้ว,4:แท้ง เริ่มใหม่ สิ้นสุดการติดตามกรณีอื่นๆ"
    },
    br_horny: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: "0000-00-00",
      comment: "วันที่อาจเป็นสัตว์ใหม่"
    },
    br_hornyconf: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "วันที่ยืนยันการตั้งท้อง"
    },
    br_pup: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: "0000-00-00",
      comment: "วันที่กำหนดตกลูก"
    },
    br_pupconf: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "วันที่ยืนยันการตกลูก"
    },
    br_nitrotk: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "รหัสถังไนโตร"
    },
    br_dtmating: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: "0000-00-00",
      comment: "วันเวลาที่ผสมเทียม"
    },
    br_staffins: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "id เจ้าหน้าที่ผสมเทียม"
    },
    br_staffin: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: "",
      comment: "รายละเอียดผู้ผสมเทียม"
    },
    br_dtup: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "0000-00-00 00:00:00",
      comment: "วันเวลาปรับปรุงข้อมูล"
    },
    br_staffupd: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "id ผู้ปรับปรุงข้อมูล"
    },
    br_staffup: {
      type: DataTypes.STRING(150),
      allowNull: true,
      defaultValue: "",
      comment: "รายละเอียดผู้ปรับปรุงข้อมูล"
    },
    br_lat: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    br_long: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    br_horntype: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "1:โทรศัพท์, 2:สังเกตุด้วยตา, 3:ล้วงตรวจ"
    }
  }, {
    sequelize,
    tableName: 'arin_breed_bin',
    timestamps: false
  });
};
