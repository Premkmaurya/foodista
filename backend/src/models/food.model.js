const mongoose = require('mongoose');


const foodSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    video:{
        type:String,
        required:true
    },
    ingredients:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    seller:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"seller",
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    likeCount:{
        type:Number,
        default:0,
        min: 0
    },
    saveCount:{
        type:Number,
        default:0,
        min: 0
    }
},{
    timestamps:true
})

const foodModel = mongoose.model('food',foodSchema);

module.exports = foodModel;