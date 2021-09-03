const express =require('express')
const router = express.Router()
const argon = require('argon2')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const User = require('../models/User')


// @route POST api/auth/register
//@desc Register user
//@access Public
router.post('/register', async(req,res)=>{
    try {
        const { email, password, personalInfo, date, to}= req.body
        if (!(email&&password&&personalInfo)){
            res.status(400).send("Missing email or password")
        }
        const oldUser = await User.findOne({email})
        if(oldUser)
        return res.status(400).send('Email is already exist')
        //hash password
        const hashPass = await argon.hash(password)
        const newUser = await User.create({
            email,
            password:hashPass,
            personalInfo,
            date,
        })
        const token = jwt.sign(
            { newUser_id: newUser._id,email},
            process.env.ACCESS_TOKEN,
            {
              expiresIn: "2h",
            }
          );
          //Console log token 
          console.log(token)
          // save user token
          newUser.token = token;
      
          // return new user
          res.status(201).json(newUser);
        } catch (err) {
          console.log(err);
        }

      
          

        //Token
    //     const token = jwt.sign({userID:newUser._id}, process.env.ACCESS_TOKEN)
    //     res.json({success:true,message:"Success!!" , token})
    // } catch (error) {
    //     console.log(error)
        
    // }
    // const{ email, password } = req.body
    //simple validation
    // if(!email || !password)
    // return res
    //     .status(400)
    //     .json({success:false, message: 'Missing email or password'})
        // try {
        //     // Check exiting email

        // } catch (error) {
            
        // }
    
})


module.exports = router
