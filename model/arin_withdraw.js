const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('arin_withdraw', {
    wd_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "ลำดับใบเบิกทั้งหมด"
    },
    wd_station: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "",
      comment: "รหัสสถานี"
    },
    wd_year: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "ปีงบประมาณ"
    },
    wd_num: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "เลขใบเบิกประจำปีงบประมาณ"
    },
    wd_index: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "เลขที่หนังสือ"
    },
    wd_sending: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "วันที่ขอเบิก"
    },
    wd_comment: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "หมายเหตุ"
    },
    wd_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "สถานะใบเบิก 0:กำลังดำเนินการ, 1:รับของแล้วเรียบร้อย เสร็จสิ้น, 2:ยกเลิกใบเบิก หรือ ถูกยกเลิก"
    },
    wd_dt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "วันเดือนปีที่สร้างใบเบิก"
    },
    wd_statff_mk: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "เจ้าหน้าที่ผู้สร้างใบขอเบิก"
    },
    wd_staff: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "เจ้าหน้าที่ ผู้อนุมัติขอเบิก"
    },
    wd_staff_stat: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: "สถานะขอเบิก เจ้าหน้าที่ 0:ยังไม่ได้รับข้อมูล ,1:ทราบและกำลังดำเนินการ, 2:แก้ไข, 3:ปฏิเสธ, 4:อนุมัติ, 5:รับของแล้ว"
    },
    wd_staff_dt: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "วันที่ เจ้าหน้าที่ปรับปรุงข้อมูล"
    },
    wd_command: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "ผบ.หน่วยผู้อนุมัติ"
    },
    wd_command_stat: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "สถานะการอนุมัตของ ผบ.หน่วย"
    },
    wd_command_dt: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "วันที่ ผบ.หน่วย ปรับปรุงข้อมูล"
    },
    wd_director: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "ผอ.สทพ"
    },
    wd_director_stat: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "สถานะการพิจารณาของ ผอ.สทพ."
    },
    wd_director_dt: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "วันที่ ผอ.สทพ. ปรับปรุงข้อมูล"
    },
    wd_sender: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "เจ้าหน้าที่ กสข. ผู้ดำเนินการจัดวัสดุอุปกรณ์ เพื่อนำจ่าย"
    },
    wd_sender_stat: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "สถานะเจ้าหน้าที่ กสข. เตรียมภัาดุเพื่อจัดส่ง"
    },
    wd_sender_dt: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "วันที่ เจ้าหน้าที่ กสข. ปรับปรุงข้อมูล"
    },
    wd_depart: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "ผอ.กสข."
    },
    wd_depart_stat: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "สถานะของ ผอ.กสข."
    },
    wd_depart_dt: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "วันที่ ผอ.กสข. ปรับปรุงข้อมูล"
    },
    wd_parcel_send: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "เจ้าหน้าที่ผู้จ่ายของ"
    },
    wd_parcel_receive: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "เจ้าหน้าที่หน่วยผู้รับของ"
    },
    wd_parcel_dt: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "วันเวลา จ่ายของให้แก่หน่วย"
    },
    wd_parcel_index: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "เลขที่หนังสือใบเบิกออกโดย  กสข"
    }
  }, {
    sequelize,
    tableName: 'arin_withdraw',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "wd_id" },
        ]
      },
      {
        name: "key_withdraw",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "wd_station" },
          { name: "wd_year" },
          { name: "wd_num" },
        ]
      },
    ]
  });
};
