const User = require('../models/User')
const crypto = require('crypto')


const createUser = async(req,res) => {
    try{
        
        const user = await User.findOne({correo: req.body.correo})
        if(user)
        {
            throw new Error('Email en eso')
        }
        console.log("ads")
        const newUser = new User(req.body)
        newUser.hashPassword(req.body.password)
        await newUser.save()
        res.json({sucess:true, message: 'User created', id : newUser._id, token : newUser.generateToken()})
    }catch(err){
        res.json({sucess: false,message: err.message})
    }
}

const readUser = async (req,res) => {
    try{
        const users = await User.find()
        res.json({success : true,users})
    }catch (err) {
        res.json({success: false,message: err.message})
    }
}

const editUser = async(req,res) => {
    try{
        const {id} = req.params
        const result = await User.findByIdAndUpdate(id, req.body, {new : true})
        res.json({success: true})
    } catch (err){
        res.json({success:false, message: err.message})
    }
}

const deleteUser = async (req,res) => {
    try {
        const { id } = req.params
        const result = await User.findByIdAndDelete(id)
        res.json({success: true, response: id})
    } catch (err){
        res.json({success: false, response: err.message})
    }
}

const login = async (req,res) => {
    try{
        const { correo , password } = req.body

        const user = await User.findOne({correo})
        if(!user){
            throw new Error('La cuenta no existe')
        } 
        const validate = user.validatePassword(password, user.salt, user.password)
        if (!validate) {
            throw new Error('Usuario y/o clave incorrecta')
        }
        res.json({success:true, mensaje: 'Usuario Logeado',token : user.generateToken()})
    }catch(err){
        res.json({success:false, mensaje:err.message})
    }
}

const validateToken = (req,res) =>{
    res.json({success:true})
}

module.exports = { createUser , readUser , editUser , deleteUser, login, validateToken}