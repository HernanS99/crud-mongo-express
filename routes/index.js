const express = require('express')
const { createCart } = require('../controllers/cartControllers')
const { createProduct,readProduct, deleteProduct, editProduct, readProductById} = require('../controllers/productControllers')
const { createUser, readUser, deleteUser, editUser,login,validateToken} = require('../controllers/userControllers')
const auth = require('../middlewares/auth')

const router = express.Router()

router.route('/user')
      .post(createUser)
      .get(auth , readUser)

router.route('/user/:id')
      .delete(deleteUser)
      .put(auth,editUser)

router.route('/user/login')
      .post(login)
      .get(auth , validateToken)

router.route('/products')
      .post(auth, createProduct)
      .get(readProduct)

router.route('/product/:id')
      .get(readProductById)
      
router.route('/products/:id')
      .delete(auth,deleteProduct)
      .put(auth,editProduct)

router.route('/cart')
      .post(createCart)

module.exports = router