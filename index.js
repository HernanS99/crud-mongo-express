const express = require('express')
const cors = require('cors')
require('dotenv').config()
require('./config/database')
const router = require('./routes/index')

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api' , router)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'))
    app.get('*',(req,res) => {
        res.sendFile(path.join(__dirname + '/frontend/build/index.html'))
    })
}

app.listen(4000,() => console.log('listening on port 4000'))