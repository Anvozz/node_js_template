const { AUTH_CONFIG } = require('./auth.config')
const { API_MESSAGE } = require('../constants/api-message')
const { models } = require('../app')
const passport = require('passport')
const passport_jwt = require('passport-jwt')
const ResultHandler = require('./ResultHandler')


passport.use( new passport_jwt.Strategy(
    {
    jwtFromRequest : passport_jwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey : AUTH_CONFIG.secret
    }, 
    async ( jwt_payload , done) =>{
        try {
            const user = await models.arin_staff.findOne({ where : { st_Id : jwt_payload.id}})

            if (!user) {
                return done(new Error(API_MESSAGE.USER_NOTFOUND))
            }
            return done(null , jwt_payload)
        } catch(error) {
            done(error)
        }
    }))

module.exports.authenticate = passport.authenticate('jwt' , {session : false})

module.exports.Hasrole = (roles) =>{
    return async(req,res,next) =>{
        let user_id = req.user.id

        let user

        try {
            user = await models.arin_staff.findOne({ where : { st_Id : user_id}})
        } catch (error) {
            ResultHandler(res , API_MESSAGE.UNAUTHOLIZED , 401)
        }

        if(roles.indexOf(user.st_level) > -1) next()
        else ResultHandler(res , API_MESSAGE.UNAUTHOLIZED , 401)
    }
}