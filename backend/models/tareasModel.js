const mongoose = require('mongoose')

const tareaSchema = mongoose.Schema({
user:{
type: mongoose.Schema.Types.ObjectId,
required: true,
ref:  'User'
},

    descripcion: {
        type:  String,
        required: [true, 'Por favor teclea una descripcion']

    },

    },{ 
        timestamps: true //Crea campos createdAt y updatedAt


})

module.exports = mongoose.model('Tarea', tareaSchema)//exporta el modelo de la base de datos