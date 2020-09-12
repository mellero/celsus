const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const testAPIRouter = require('./routes/testAPI')
const usersAPIRouter = require('./routes/users')
const passport = require('passport')
const ip = require('ip')

require('dotenv').config()

const PORT = process.env.API_PORT || 9000

// Mongoose connection and db setup
mongoose.connect(process.env.MONGOOSE_API_KEY, { useNewUrlParser: true })

const db = mongoose.connection
db.on('error', console.error.bind(console, 'Connection Error:'))
db.once('open', () => console.log('Mongoose Connected Successfully'))

const app = express()

// Middleware
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Routers
app.use('/testAPI', testAPIRouter)
app.use('/users', usersAPIRouter)

// Base routes
app.get('/', (req, res) => {
    res.send(ip.address())
})

app.listen(PORT, ip.address(), () => {
    console.log(ip.address())
    console.log('Listening on PORT: ' + PORT)
})