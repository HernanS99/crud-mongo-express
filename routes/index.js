const express = require('express')
const {createUser,readUser,editUser,deleteUser} = require('../controllers/userControllers')
const router = express.Router()