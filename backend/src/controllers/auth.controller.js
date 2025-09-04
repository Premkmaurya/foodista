const userModel = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


async function userRegister(req,res) {
    const {fullName,email,password} = req.body;
const isUserExist = await userModel.findOne({email});
    if(isUserExist){
        return res.status(400).json({
            message:"User already exist"
        })
    }
    
    const hashPassword = await bcrypt.hash(password,10);

    const user = new userModel.create({
        fullName,
        email,
        password:hashPassword
    })

    const token = jwt.sign({id:user._id},process.env.JWT_SECRET)

    res.cookie("token",token)

    return res.status(201).json({
        message:"User registered successfully",
        user:{
            id:user._id,
            fullName:user.fullName,
            email:user.email
        }
    })
}

async function userLogin(req,res){
    const {email,password} = req.body;
    const user = await userModel.findOne({email});
    if(!user){
        return res.status(400).json({
           message:"email or password is incorrect."
        })
    }
    const isPasswordCorrect = await bcrypt.compare(password,user.password)
    if(!isPasswordCorrect){
        return res.status(400).json({
            message:"email or password is incorrect."
        })
    }

    const token = jwt.sign({id:user._id},process.env.JWT_SECRET)
    
    res.cookie("token",token)

    return res.status(201).json({
        message:"user logged in successfully.",
        user:{
            id:user._id,
            email:user.email,
        }
    })
}

async function userLogout(req,res){
    res.clearCookie("token")
    return res.status(200).json({
        message:"user logged out successfully."
    })
}

module.exports = {
    userRegister,
    userLogin,
    userLogout
}