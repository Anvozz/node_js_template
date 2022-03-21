const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('arin_staff_bin', {
    st_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    st_code: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    st_rank: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    st_sex: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    st_type: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    st_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    st_lastname: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    st_dob: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    st_position: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    st_user: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    st_pass: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    st_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    st_station: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    st_picture: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    st_dtmake: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    st_dtup: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    st_useup: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    st_dtlog: {
      type: DataTypes.DATE,
      allowNull: true
    },
    st_logfreq: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    vlat: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlong: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    st_army: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    st_level: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'arin_staff_bin',
    timestamps: false
  });
};
