const mongoose = require('mongoose')


const sellerSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String
    }
},{
    timestamps:true
})

const sellerModel = mongoose.model('seller',sellerSchema)

module.exports = sellerModel;