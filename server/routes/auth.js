const express =require('express')
const router = express.Router()
const argon = require('argon2')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const User = require('../models/User')


// @route POST /register
//@desc Register user
//@access Public
router.post('/register', async(req,res)=>{
    try {
        const { email, password, firstName, lastName,dob,phone,address}= req.body
        const validation = ()=>{
          if(!email||!password){
            return false
          }
        }
        if(validation||!personalInfo){
          res.status(400).json({message:"All input is required"})
        }

        // if (!email||!password||!personalInfo){
        //     res.status(400).send("All input is required")
        // }
        //check existing email, phone number
        const oldUser = await User.findOne({email})
        if(oldUser)
        return res.status(400).json({message:'Email is already exist'})
        //hash password
        const hashPass = await argon.hash(password)
        const newUser = await User.create({
            email,
            password:hashPass,
            name:`${firstName} ${lastName}`,
            dob,
            phone,
            address
        })
        const token = jwt.sign(
          { newUser_id: newUser._id,email},
          process.env.ACCESS_TOKEN,
          {
            expiresIn: "2h",
          }
        );
        newUser.token = token;
      
          // return new user
          res.status(201).json(newUser);
        } catch (err) {
          console.log(err);
        } 
})
router.post("/login", async (req, res) => {

  // Our login logic starts here
  try {
    // Get user input
    const { email, password } = req.body;

    // Validate user input
    if (!(email && password)) {
      res.status(400).json({message:"All input is required"});
    }
    // Validate if user exist in our database
    const user = await User.findOne({ email });

    if (user && (await argon.verify( user.password, password))) {
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.ACCESS_TOKEN,
        {
          expiresIn: "2h",
        }
      );

      // save user token
      // user.token = token;

      // user
      res.status(200).json({result: user, token});
      res.status(200).send("Login successful!");
    }
    res.status(400).json({message:"Invalid Credentials"});
  } catch (err) {
    console.log(err);
  }
  // Our register logic ends here
});


// router.post("/login", async (req, res) => {
//   const {email, password} =req.body
//   // Check for input
//   if(!email||!password)
//   return res
//     .status(400)
//     .json({success :false, message:'All input is required'})
//     // check for registered email
//     try {
//       const user = await User.findOne({email})
//       if(!email)
//       return res
//         .status(400)
//         .json({success :false, message:'Incorrect Email'}) 
//         // If email is already registered check password
//       const passwordValid= await argon.verify(user.password, password)
//       if (!passwordValid)
//       return res
//       .status(400)
//       .json({success :false, message:'Incorrect Password'})
//       // Generate token
//       const token = jwt.sign(
//         { user_id: user._id,email},
//         process.env.ACCESS_TOKEN,
//         {
//           expiresIn: "2h",
//         }
//       );
//       //Console log token 
//       console.log(token)
//       // save user token
//       user.token = token;

//     } catch (error) {
      
//     }
// });


module.exports = router
