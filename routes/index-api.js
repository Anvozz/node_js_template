const Router = require('express').Router()


Router.use('/staff' , require('./staff'))
Router.use('/auth',require('./auth'))


module.exports = Router