const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FormSchema = new Schema({
    submitDate: {
        type: Date,
        default: Date.now
    },
    user:{
        type: Schema.Types.ObjectId,
        ref :'users'
    },
    symptoms:{
        type: String,
        required: true
    }

})

module.exports = mongoose.model('form',FormSchema)