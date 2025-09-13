const mongoose = require('mongoose');


const cartSchema = mongoose.Schema({
    food:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"food",
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    
},{
    timestamps:true
})

const cartModel = mongoose.model("cart",cartSchema)

module.exports = cartModel;