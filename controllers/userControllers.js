const User = require('../models/User')

const createUser = (req,res) => {
    console.log(req.body)
    console.log('crear usuario')
}

const readUser = (req,res) => {
    console.log('leer usuario')
}

const editUser = (req,res) => {
    console.log('editar usuario')
}

const deleteUser = (req,res) => {
    console.log('eliminar usuario')
}

module.exports = { createUser , readUser , editUser , deleteUser}