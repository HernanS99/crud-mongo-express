const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    nombre: {type:String,required : true},
    apellido:{type:String,required : true},
    correo: String,
    edad: Number,
    newsletter : Boolean,
    isAdmin: Boolean
})

const User = mongoose.model('user',userSchema)

module.exports = User