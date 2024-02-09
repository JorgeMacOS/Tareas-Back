const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
name: { 
type: String,
required: [true, "Por favor teclea tu nombre" ]
},

email:{
    type: String,
    required: [true, "Por favor teclea tu email" ],
    unique: true
},

password: {
    type: String, 
    required: [true, "Por favor teclea tu password" ]
},

esAdmin: {
    type: Boolean,
    default: false
},
}, {
    timestamps: true //Crea campos createdAt y updatedAt
}) 

module.exports = mongoose.model('User', userSchema)
//Se exporta el modelo para poder usarlo en otros archivos