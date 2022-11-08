const express = require('express')
const { createUser, readUser, deleteUser, editUser} = require('../controllers/userControllers')
const router = express.Router()

router.route('/user')
      .post(createUser)
      .get(readUser)
router.route('/user/:id')
      .delete(deleteUser)


module.exports = router