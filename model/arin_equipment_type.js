const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('arin_equipment_type', {
    eqt_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "รหัสประเภทครุภัณฑ์"
    },
    eqt_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "ชื่อประเภทครุัณฑ์"
    },
    eqt_unit: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "หน่วยนับ ครุภัณฑ์"
    },
    eqt_mode: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "1",
      comment: "1:ใช้สำหรับหน่วยระบุครุภัณฑ์, 2:ใช้เพื่อการระบุเบิกด้วย"
    }
  }, {
    sequelize,
    tableName: 'arin_equipment_type',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "eqt_id" },
        ]
      },
    ]
  });
};
