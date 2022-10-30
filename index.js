const express = require('express')
const cors = require('cors')
require('dotenv').config()
require('./config/database')

const app = express()

app.use(cors())
app.use(express.json)


app.listen(4000,() => console.log('listening on port 4000'))