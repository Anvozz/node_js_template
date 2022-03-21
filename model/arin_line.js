const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('arin_line', {
    li_mode: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "R",
      primaryKey: true,
      comment: "R : วงรอบการทำงาน สถานี, B : กสข, A : admin"
    },
    li_station: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "",
      primaryKey: true,
      comment: "รหัสสถานี"
    },
    li_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "ชื่อ Token"
    },
    li_token: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: "รหัส token ที่ gen มาได้"
    },
    li_group: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "กลุ่ม line"
    },
    li_desc: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "รายละเอียดอธิบาย"
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1,
      comment: "การใช้งาน 0 : ปิด, 1:เปิด"
    },
    li_com: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: "คำอธิบายการใช้งาน"
    }
  }, {
    sequelize,
    tableName: 'arin_line',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "li_station" },
          { name: "li_mode" },
        ]
      },
    ]
  });
};
