const ResultHandler = require("../middleware/ResultHandler")
const StaffServices = require('../services/staff')

module.exports.GetAllStaffData = async (req,res,next) =>{
    try {
        ResultHandler(res, await StaffServices.GetAllStaffData())        
    } catch (error) {
        next(error)
    }
}

module.exports.GetStaffData = async(req , res, next) =>{
    try {
        ResultHandler(res , await StaffServices.GetStaffData(req))
    } catch (error) {
        next(error)
    }
}