const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const bodyparser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const authRoutes = require('./routes/auth')
const analyticsRoutes = require('./routes/analytics')
const categoryRoutes = require('./routes/category')
const orderRoutes = require('./routes/order')
const positionRoutes = require('./routes/position')
const app = express()

const keys = require('./config/keys')

mongoose.connect(keys.mongoURI)
.then(() => {
    console.log('MongoDb start success!')
})
.catch(error => {
    console.error(error)
})


app.use(passport.initialize())
require('./middleware/passport')(passport)

app.use(morgan('dev'))

app.use(bodyparser.urlencoded({
    extended: true
}))
app.use(bodyparser.json())

app.use(cors())

app.use('/api/auth', authRoutes)
app.use('/api/analytics', analyticsRoutes)
app.use('/api/category', categoryRoutes)
app.use('/api/order', orderRoutes)
app.use('/api/position', positionRoutes)


module.exports = app