module.exports = async (res , data , statuses = 200) => {
    res.status(statuses).send({
        message : data,
        status_code : statuses
    })
}