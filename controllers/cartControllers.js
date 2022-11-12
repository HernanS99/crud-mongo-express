const Cart = require('../models/Product')

const createCart = async (req, res) => {
    try{
        const newCart = new Cart(req.body)
        await newCart.save()
        res.json({success: true, mesagge: 'Carrito creado',cartId:newCart._id})
    }catch(err) {
        res.json({success: false, error: err.message})
    }
}




module.exports = {createCart}