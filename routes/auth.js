const Router = require('express').Router()
const AuthController = require('../controller/auth')

Router.post('/signIn',AuthController.SignIn)



module.exports = Router