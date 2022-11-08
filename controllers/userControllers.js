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

module.exports = { createUser , readUser , editUser , deleteUser}