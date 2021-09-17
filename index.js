const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./routes/auth')
const Users = require('./models/User')
const Forms =require('./models/forms')
require('dotenv').config()
const cors = require('cors')
const ErrorHandle = require('./middleware/error')
const path = require('path')




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
app.use(express.static(path.resolve(__dirname, './client/build')));

app.use('/', authRouter)
app.use('/private', require('./routes/private'))

app.use(ErrorHandle)

app.get('/users', function(req, res){
    Users.find({}, function(err, users){
        res.send(users)
    })
 })
 app.get('/api/forms', function(req, res){
    Forms.find({}, function(err, forms){
        res.send(forms)
    })
 })
 app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
   });


    


const PORT = process.env.PORT ||4000
app.listen(process.env.PORT,()=> console.log(`Sever started on port ${PORT}`))