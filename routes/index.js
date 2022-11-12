const express = require('express')
const { createProduct } = require('../controllers/productControllers')
const { createUser, readUser, deleteUser, editUser} = require('../controllers/userControllers')
const router = express.Router()

router.route('/user')
      .post(createUser)
      .get(readUser)
router.route('/user/:id')
      .delete(deleteUser).put(editUser)

router.route('/products').post(createProduct)


module.exports = router