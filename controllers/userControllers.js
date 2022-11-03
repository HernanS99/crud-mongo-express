const User = require('../models/User')

const createUser = async(req,res) => {
    try{
        const newUser = new User(req.body)
        await newUser.save()
        res.json({sucess:true, message: 'User created', id : newUser._id})
    }catch(err){
        res.json({sucess: false,message: err.message})
    }
}

const readUser = (req,res) => {
    console.log('leer usuario')
}

const editUser = (req,res) => {
    console.log('editar usuario')
}

const deleteUser = (req,res) => {
    console.log('eliminar usuario')
}

module.exports = { createUser , readUser , editUser , deleteUser}