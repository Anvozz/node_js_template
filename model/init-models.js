var DataTypes = require("sequelize").DataTypes;
var _arin_army = require("./arin_army");
var _arin_breed = require("./arin_breed");
var _arin_breed_bin = require("./arin_breed_bin");
var _arin_breed_stat = require("./arin_breed_stat");
var _arin_color = require("./arin_color");
var _arin_cowmember = require("./arin_cowmember");
var _arin_cowstate = require("./arin_cowstate");
var _arin_district = require("./arin_district");
var _arin_equipment = require("./arin_equipment");
var _arin_equipment_type = require("./arin_equipment_type");
var _arin_line = require("./arin_line");
var _arin_member = require("./arin_member");
var _arin_month = require("./arin_month");
var _arin_nitrotank = require("./arin_nitrotank");
var _arin_nitrotank_bin = require("./arin_nitrotank_bin");
var _arin_nitrotank_type = require("./arin_nitrotank_type");
var _arin_province = require("./arin_province");
var _arin_rank = require("./arin_rank");
var _arin_semen = require("./arin_semen");
var _arin_staff = require("./arin_staff");
var _arin_staff_bin = require("./arin_staff_bin");
var _arin_station = require("./arin_station");
var _arin_supply = require("./arin_supply");
var _arin_supply_bin = require("./arin_supply_bin");
var _arin_township = require("./arin_township");
var _arin_vehicle = require("./arin_vehicle");
var _arin_vehicle_bin = require("./arin_vehicle_bin");
var _arin_vehicle_type = require("./arin_vehicle_type");
var _arin_withdraw = require("./arin_withdraw");
var _arin_withdraw_bin = require("./arin_withdraw_bin");
var _arin_withdraw_type = require("./arin_withdraw_type");
var _arin_wstock = require("./arin_wstock");
var _arin_wstock_bin = require("./arin_wstock_bin");
var _refreshtoken = require("./refreshtoken");

function initModels(sequelize) {
  var arin_army = _arin_army(sequelize, DataTypes);
  var arin_breed = _arin_breed(sequelize, DataTypes);
  var arin_breed_bin = _arin_breed_bin(sequelize, DataTypes);
  var arin_breed_stat = _arin_breed_stat(sequelize, DataTypes);
  var arin_color = _arin_color(sequelize, DataTypes);
  var arin_cowmember = _arin_cowmember(sequelize, DataTypes);
  var arin_cowstate = _arin_cowstate(sequelize, DataTypes);
  var arin_district = _arin_district(sequelize, DataTypes);
  var arin_equipment = _arin_equipment(sequelize, DataTypes);
  var arin_equipment_type = _arin_equipment_type(sequelize, DataTypes);
  var arin_line = _arin_line(sequelize, DataTypes);
  var arin_member = _arin_member(sequelize, DataTypes);
  var arin_month = _arin_month(sequelize, DataTypes);
  var arin_nitrotank = _arin_nitrotank(sequelize, DataTypes);
  var arin_nitrotank_bin = _arin_nitrotank_bin(sequelize, DataTypes);
  var arin_nitrotank_type = _arin_nitrotank_type(sequelize, DataTypes);
  var arin_province = _arin_province(sequelize, DataTypes);
  var arin_rank = _arin_rank(sequelize, DataTypes);
  var arin_semen = _arin_semen(sequelize, DataTypes);
  var arin_staff = _arin_staff(sequelize, DataTypes);
  var arin_staff_bin = _arin_staff_bin(sequelize, DataTypes);
  var arin_station = _arin_station(sequelize, DataTypes);
  var arin_supply = _arin_supply(sequelize, DataTypes);
  var arin_supply_bin = _arin_supply_bin(sequelize, DataTypes);
  var arin_township = _arin_township(sequelize, DataTypes);
  var arin_vehicle = _arin_vehicle(sequelize, DataTypes);
  var arin_vehicle_bin = _arin_vehicle_bin(sequelize, DataTypes);
  var arin_vehicle_type = _arin_vehicle_type(sequelize, DataTypes);
  var arin_withdraw = _arin_withdraw(sequelize, DataTypes);
  var arin_withdraw_bin = _arin_withdraw_bin(sequelize, DataTypes);
  var arin_withdraw_type = _arin_withdraw_type(sequelize, DataTypes);
  var arin_wstock = _arin_wstock(sequelize, DataTypes);
  var arin_wstock_bin = _arin_wstock_bin(sequelize, DataTypes);
  var refreshtoken = _refreshtoken(sequelize, DataTypes);


  return {
    arin_army,
    arin_breed,
    arin_breed_bin,
    arin_breed_stat,
    arin_color,
    arin_cowmember,
    arin_cowstate,
    arin_district,
    arin_equipment,
    arin_equipment_type,
    arin_line,
    arin_member,
    arin_month,
    arin_nitrotank,
    arin_nitrotank_bin,
    arin_nitrotank_type,
    arin_province,
    arin_rank,
    arin_semen,
    arin_staff,
    arin_staff_bin,
    arin_station,
    arin_supply,
    arin_supply_bin,
    arin_township,
    arin_vehicle,
    arin_vehicle_bin,
    arin_vehicle_type,
    arin_withdraw,
    arin_withdraw_bin,
    arin_withdraw_type,
    arin_wstock,
    arin_wstock_bin,
    refreshtoken,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
