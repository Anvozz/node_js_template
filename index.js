const http = require('http')
const dotenv = require('dotenv')

dotenv.config()

const app = require('./app')


const server = http.createServer(app)

const port = process.env.PORT || 9000

server.listen(port)

server.on('listening', ()=>{
    console.log(`Server Listening at port ${port}`)
})