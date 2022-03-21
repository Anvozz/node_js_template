const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('arin_station', {
    station_num: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    region: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    station_id: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    unitmain: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    unitmain_code: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    unit: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    unit_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    station: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    command: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    mu_id: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    num_team: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    vlat: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    vlong: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    station_code: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    village: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    province: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    district: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    township: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    housenum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    vgroup: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    road: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    team: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cmode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rep: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    stat: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'arin_station',
    timestamps: false
  });
};
