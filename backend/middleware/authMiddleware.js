const expressAsyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require ('../models/usersModel')

const protect = asyncHandler(async (req, res, next) => {
let token
if( req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
    try {
// obtenemos el token
token = req.headers.authorization.split(' ') [1]

// verificamos el tojen a traves de su firma
const decoded = jwt.verify(token,  process.env.JWT_SECRET)

// agregar usuario autenticado al request

req.user = await User.findBy(decoded.id_usuario).select('-password')
next()

    } catch (error) {
 console.log(error)
 res.status(401)
 throw new Error('Acceso no autorizado')
    }
}

if (!token) {
    res.status(401)
    throw new Error('Acceso no autorizado, no se proporciono un token')

}

})

module.exports = { protect }