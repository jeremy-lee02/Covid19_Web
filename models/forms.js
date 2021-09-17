const mongoose = require('mongoose');
const Schema = mongoose.Schema


const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];
const dateObj = new Date();
const month = monthNames[dateObj.getMonth()];
const day = String(dateObj.getDate()).padStart(2, '0');
const year = dateObj.getFullYear();
const output = month  + '\n'+ day  + ',' + year;

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
            type: String,
            default: output
        }
})

module.exports = mongoose.model('forms',FormSchema)