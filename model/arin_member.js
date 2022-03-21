const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('arin_member', {
    memid: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    station: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: ""
    },
    idp: {
      type: DataTypes.STRING(13),
      allowNull: true,
      defaultValue: ""
    },
    sex: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "1",
      comment: "1:male, 2:female"
    },
    rank: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: ""
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    lastname: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    province: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    district: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    township: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    road: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    vgroup: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    village: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    housenum: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    dob: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tel: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    line: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    vlat: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlong: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dtmake: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtupdate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    usupdate: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    memimage: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    army: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 5
    }
  }, {
    sequelize,
    tableName: 'arin_member',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "memid" },
        ]
      },
      {
        name: "arin_member_index1",
        using: "BTREE",
        fields: [
          { name: "station" },
        ]
      },
      {
        name: "arin_member_index",
        using: "BTREE",
        fields: [
          { name: "memid" },
        ]
      },
    ]
  });
};
