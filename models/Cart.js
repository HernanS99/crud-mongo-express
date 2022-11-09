const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    userId: {type: mongoose.Types.ObjectId, ref: user},
    productsId:[{
        productId: {type: mongoose.Types.ObjectId, ref:'product'},
        quantity: {type: number}
    }]
})