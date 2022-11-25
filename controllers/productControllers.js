const Product = require('../models/Product')
const User = require('../models/User')

const createProduct = async (req, res) => {
    try{
        /* const user = await User.findById(req.auth.id)
        if(!user.isAdmin){
            throw new Error('No estas autorizado')
        } */
        const newProduct = new Product(req.body)
        await newProduct.save()
        res.json({success: true, mesagge: 'Producto creado',productId:newProduct._id})
    }catch(err) {
        res.json({success: false, error: err.message})
    }
}

const readProduct = async (req,res) => {
    try{
        const products = await Product.find()
        res.json({success : true,products})
    }catch (err) {
        res.json({success: false,message: err.message})
    }
}
const readProductById = async (req,res) => {
    try{
        const { id } = req.params
        const products = await Product.findById(id)
        res.json({success : true,products})
    }catch (err) {
        res.json({success: false,message: err.message})
    }
}

const deleteProduct = async (req,res) => {
    try {
        const { id } = req.params
        const result = await Product.findByIdAndDelete(id)
        res.json({success: true, response: id})
    } catch (err){
        res.json({success: false, response: err.message})
    }
}

const editProduct = async(req,res) => {
    try{
        const {id} = req.params
        const result = await Product.findByIdAndUpdate(id, req.body, {new : true})
        if(!result){
            throw new Error('El elemento que intestar editar')
        }
        res.json({success: true})
    } catch (err){
        res.json({success:false, message: err.message})
    }
}


module.exports = {createProduct,readProduct,deleteProduct,editProduct,readProductById}