const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()
const app = express()

mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGO_URI)
    .then(
        () => console.log('Successfully connected to db')
        err => console.log('Authentication Error')
)

const allRoutes = require('./workers/routes')

//middleware
app.use(express.json())

//routes middleware
app.use('/api/', allRoutes)




//start Server
const PORT = 3000

app.listen(PORT, () => console.log(`Server is running on ${PORT}`))
