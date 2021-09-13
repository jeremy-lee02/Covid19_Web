const User = require('../models/User')
const ErrorResponse = require('../utils/errRes')

exports.register = async (req,res,next)=>{
    const {email,password,firstName,lastName,dob,phone,address} = req.body
    try {
        const oldUser = await User.findOne({email})
        if(oldUser){
            res.status(400).json({success:false, error:'Email is already exist'})
        }
        const user = await User.create({
            email,
            password,
            name :`${firstName} ${lastName}`,
            dob,
            phone,
            address
        })
        sendToken(user,201,res)
    } catch (error) {
        next(error)
    }   

}
exports.login = async (req,res,next)=>{
    const {email, password} = req.body
    if(!email||!password){
        return next(new ErrorResponse('Please provide email or password',400))
    }
    try {
        const user = await User.findOne({email}).select("+password")
        if(!user){
            return next(new ErrorResponse('Invalid Credentials',401))
        }
        const match = await user.matchPassword(password)
        if(!match){
            return next(new ErrorResponse('Invalid Credentials',401))
        }
        sendToken(user,201,res)
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        }) 
    }
}
const sendToken =(user,statusCode,res)=>{
    const token = user.getSignedToken()
    res.status(statusCode).json({success:true,token})
}