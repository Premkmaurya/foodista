const mongoose = require('mongoose')


const sellerSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    profile:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
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