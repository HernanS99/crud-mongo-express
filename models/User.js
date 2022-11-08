const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    nombre: {type:String,required : true},
    apellido:{type:String,required : true},
    correo: {type:String,required : true},
    edad: {type:Number,required : true, min: 18, max: 150},
    newsletter : {type:Boolean,required : true},
    isAdmin: {type:Boolean,required : true}
})

const User = mongoose.model('user',userSchema)

module.exports = User