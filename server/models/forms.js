const mongoose = require('mongoose');
const Schema = mongoose.Schema

const FormSchema = new Schema({
        email:{
            type: String,
            required: [true, 'Please enter email']
        },
        idNum:{
            type: String,
            required: [true,"Please enter your id number"]
        },
        country:{type:String,required:[true,"Please enter your country"]},
        symptoms:{
            type: String,
            required: [true,"This detail is required"]
        },
        beenCountry:{
            type:String,
            required:[true,"This detail is required"] 
        },
        isolated:{
            type:String, 
            required:[[true,"This detail is required"]]
        },
        date:{
            type: Date,
            default: Date.now
        }
})

module.exports = mongoose.model('forms',FormSchema)