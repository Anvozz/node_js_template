const { models } = require("../app");

module.exports.GetAllStaffData = async () => {
    const data = await models.arin_staff.findAll()

    return data
}

module.exports.GetStaffData = async (req) => {
    const  { id } = req.params
    const data = await models.arin_staff.findOne({ where : { st_Id : id}})
    return data
}