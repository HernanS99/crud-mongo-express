const express = require('express')
const { createUser, readUser} = require('../controllers/userControllers')
const router = express.Router()

router.route('/user')
      .post(createUser)
      .get(readUser)



module.exports = router