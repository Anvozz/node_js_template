const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('arin_equipment', {
    eq_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "รหัส ID ประจำครุภัณฑ์ ใช้อ้างอิง"
    },
    eq_type: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "ประเภทครุภัณฑ์"
    },
    eq_code: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "รหัสครุภัณฑ์"
    },
    eq_status: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "สถานะครุภัณฑ์ 1 ใช้งานได้ ; 0 งดใช้งาน"
    },
    eq_station: {
      type: DataTypes.STRING(15),
      allowNull: true,
      comment: "รหัสสถานี"
    },
    eq_comm: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "หมายเหตุ"
    },
    eq_image: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "รูปภาพ"
    },
    userins: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "ผู้นำเข้าข้อมูล"
    },
    dtins: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "วดป ที่นำเข้าข้อมูล"
    },
    userup: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "ผู้ปรับปรุงข้อมูล"
    },
    dtup: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'arin_equipment',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "eq_id" },
        ]
      },
    ]
  });
};
