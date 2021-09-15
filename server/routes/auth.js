const express =require('express')
const router = express.Router()

const jwt = require('jsonwebtoken')
require('dotenv').config()



const {register, login,form}=require('../controller/auth')
 
router.route('/register').post(register)
router.route('/login').post(login)
router.route('/forms').post(form)

module.exports = router
