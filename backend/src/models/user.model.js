const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    profile:{
        type:String
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

const userModel = mongoose.model('user',userSchema)

module.exports = userModel;