const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./routes/auth')
const Users = require('./models/User')
require('dotenv').config()
const cors = require('cors')




const connectDB = async()=> {
    try {
        await mongoose.connect(process.env.DATABASE_CONNECTION) 
        console.log('MongoDB connected')
    } catch (error) {
        console.log(error.message)
        process.exit(1)
        
    }
}

// const users= mongoose.model('users')




connectDB()
const app = express()
app.use(cors())
app.use(express.json())

app.use('/', authRouter)

app.get('/users', function(req, res){
    Users.find({}, function(err, users){
        res.send(users)
    })
 })


app.listen(process.env.PORT,()=> console.log(`Sever started on port ${process.env.PORT}`))