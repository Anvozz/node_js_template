const Router = require('express').Router()
const StaffController = require('../controller/staff')
const {authenticate , Hasrole} = require('../middleware/auth')


Router.get('/getAllStaff', [authenticate] ,StaffController.GetAllStaffData)
Router.get('/getAllStaff/:id', [authenticate] , StaffController.GetStaffData)


module.exports = Router