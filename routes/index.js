const express = require('express')
const { createCart } = require('../controllers/cartControllers')
const { createProduct,readProduct, deleteProduct, editProduct } = require('../controllers/productControllers')
const { createUser, readUser, deleteUser, editUser} = require('../controllers/userControllers')
const router = express.Router()

router.route('/user')
      .post(createUser)
      .get(readUser)
router.route('/user/:id')
      .delete(deleteUser)
      .put(editUser)

router.route('/products')
      .post(createProduct)
      .get(readProduct)
      
router.route('/products/:id')
      .delete(deleteProduct)
      .put(editProduct)

router.route('/cart')
      .post(createCart)


module.exports = router