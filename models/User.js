const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    nombre: {type:String,required : true, trim: true, lowercase:true},
    apellido:{type:String,required : true, trim: true, lowercase:true},
    correo: {type:String,required : true, trim: true, lowercase:true},
    edad: {type:Number,required : true, min: 18, max: 99},
    newsletter : {type:Boolean,required : true},
    isAdmin: {type:Boolean,required : true},
    password: {type:String,required:true,minLength:8},
    salt: {type: String, required: true}
})

const User = mongoose.model('user',userSchema)

module.exports = User