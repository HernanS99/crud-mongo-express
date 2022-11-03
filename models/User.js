const mongoose = ('mongoose')

const userSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    correo: String,
    edad: Number,
    newsletter : Boolean,
    isAdmin: Boolean
})

const User = mongoose.model('user',userSchema)

module.exports = User