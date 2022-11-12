const Product = require('../models/Product')

const createProduct = async (req, res) => {
    try{
        const newProduct = new Product(req.body)
        await newProduct
    }catch(err) {
        res.json({success: false, error: error.message})
    }
}

module.exports = {createProduct}