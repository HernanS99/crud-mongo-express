const mongoose = require ('mongoose')

const productSchema = new mongoose.Schema({
    name: {type:String,required : true, trim: true, lowercase:true},
    price: {type:Number,required : true},
    brand: {type:String,required : true, trim: true, lowercase:true},
    inStock: {type:Boolean,required : true}
  })

  const Product = mongoose.model('product', productSchema)

module.exports = Product