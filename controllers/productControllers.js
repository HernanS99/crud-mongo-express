const Product = require('../models/Product')

const createProduct = async (req, res) => {
    try{
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




module.exports = {createProduct,readProduct}