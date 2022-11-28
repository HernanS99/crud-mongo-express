const mongoose = require ('mongoose')

const productSchema = new mongoose.Schema({
    name: {type:String,required : true, trim: true, lowercase:true},
    price: {type:Number,required : true},
    brand: {type:String,required : true, trim: true, lowercase:true},
    stock: {type:Number,required : true},
    desc: {type:String,required : true},
    imgUrl:{type:String,required : false}
  })

  const Product = mongoose.model('product', productSchema)

module.exports = Product