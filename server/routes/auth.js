const express =require('express')
const router = express.Router()
const argon = require('argon2')
const jwt = require('jsonwebtoken')
require('dotenv').config()



const {register, login}=require('../controller/auth')
 
router.route('/register').post(register)
router.route('/login').post(login)

module.exports = router
