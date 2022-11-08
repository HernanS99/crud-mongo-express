const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    nombre: {type:String},
    apellido: String,
    correo: String,
    edad: Number,
    newsletter : Boolean,
    isAdmin: Boolean
})

const User = mongoose.model('user',userSchema)

module.exports = User