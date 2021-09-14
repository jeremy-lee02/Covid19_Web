
const mongoose = require('mongoose');
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
const jwt =require('jsonwebtoken')


const UserSchema = new Schema({
    
        email:{
            type: String,
            required: [true, "Please provide a email"],
            unique: true, 
            match: [/^([A-Za-z0-9]+\.?){2,}[^.]\@(\w\.?)*[^\.]\.[A-Za-z]{2,5}$/, "Invalid email"]
        },
        password:{
            type: String,
            required: [true, "Please enter a password"]
        },
        name:{type:String,required:[true,"Please provide a Firstname and Lastname"]},
        dob:{type:String,required:[true,"Please provide date of birth"]},
        phone:{type:String,required:[true,"Please provide phone number"]},
        address:{type:String,required:[true,"Please provide address"]},
        
        date:{
            type: Date,
            default: Date.now
        }
})

UserSchema.methods.matchPassword = async function(password){
    return await bcrypt.compare(password, this.password)
}

UserSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        next()
    }
    const salt =await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password,salt)
    next()
})

UserSchema.methods.getSignedToken = ()=>{
    return jwt.sign({id:this._id},process.env.ACCESS_TOKEN, {expiresIn:'2h'})
}

module.exports = mongoose.model('users',UserSchema)