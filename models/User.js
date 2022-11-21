const mongoose = require('mongoose')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    nombre: {type:String,required : true, trim: true, lowercase:true},
    apellido:{type:String,required : true, trim: true, lowercase:true},
    correo: {type:String,required : true, trim: true, lowercase:true},
    edad: {type:Number,required : true, min: 18, max: 99},
    newsletter : {type:Boolean,required : false},
    isAdmin: {type:Boolean,required : false,default:false},
    password: {type:String,required:true,minLength:8},
    salt: {type: String, required: true}
})


userSchema.methods.hashPassword = function(password){
    this.salt = crypto.randomBytes(16).toString('hex')
    this.password = crypto.pbkdf2Sync(password,this.salt,10000,512,'sha512').toString('hex')
}

userSchema.methods.validatePassword = function (password, salt, passwordDB) {
    const hash = crypto.pbkdf2Sync(password, salt, 10000, 512, 'sha512').toString('hex')
    return hash === passwordDB
  }

userSchema.methods.generateToken = function (){
    const token = jwt.sign({id : this._id}, process.env.SECRET)
    return token
}

const User = mongoose.model('user',userSchema)

module.exports = User