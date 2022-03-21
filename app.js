//** Import Express */
const express = require ('express')
//** Import Middleware */
const cors = require('cors')
const helmet = require('helmet')
const cookieParser = require('cookie-parser')
const Sequelize = require('sequelize')
const initModels = require('./model/init-models')
//** express instance */
const app = express()



app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded( {extended : false}) )
app.use(cookieParser())

//** Set Ejs view engine */
app.set('view engine' , 'ejs')


//** Imports Sequelize Database */
const e = process.env;
const sequelize_str = new Sequelize(`${e.DB_TYPE}://${e.DB_USERNAME}:${e.DB_PASSWORD}@${e.DB_HOST}:${e.DB_PORT}/${e.DB_DATABASE}`,{ logging: false })

const models = initModels(sequelize_str)

module.exports.models = models


//** Import Routes */
app.use('/api',require('./routes/index-api'))



module.exports = app