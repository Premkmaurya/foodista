const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    profileImg:{
        type:String
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String
    },
    cart:{
        type:Array,
        default:[]
    }
},{
    timestamps:true
})

const userModel = mongoose.model('user',userSchema)

module.exports = userModel;