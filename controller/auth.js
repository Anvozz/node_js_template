const jwt = require('jsonwebtoken')
const { AUTH_CONFIG } = require('../middleware/auth.config')

module.exports.SignIn = async (req,res,next) =>{
  const token = jwt.sign({ id : 1 } , AUTH_CONFIG.secret , { expiresIn : AUTH_CONFIG.jwtExpiration })
    
  res.send(token)

}