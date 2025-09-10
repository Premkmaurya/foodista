const userModel = require('../models/user.model');
const sellerModel = require('../models/seller.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');




//user's controller functions

async function userRegister(req,res) {
    const {name,email,password} = req.body;
    const profileImg = req.file;
  const isUserExist = await userModel.findOne({email});
    if(isUserExist){
        return res.status(400).json({
            message:"User already exist"
        })
    }
    
    const hashPassword = await bcrypt.hash(password,10);
   
    const user = await userModel.create({
        name,
        profileImg,
        email,
        password:hashPassword
    })

    const token = jwt.sign({id:user._id},process.env.JWT_SECRET)

    res.cookie("token",token,{
        expires: new Date("2038-12-31")
    })

    return res.status(201).json({
        message:"User registered successfully",
        user:{
            id:user._id,
            name:user.name,
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
    
    res.cookie("token",token,{
        expires: new Date("2038-12-31")
    })

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



//seller's controller functions
async function sellerRegister(req,res) {
    const {name,phone,address,email,password} = req.body;
    const profileImg = req.file;
const isUserExist = await sellerModel.findOne({email});
    if(isUserExist){
        return res.status(400).json({
            message:"seller already exist"
        })
    }
    
    const hashPassword = await bcrypt.hash(password,10);

    const user = await sellerModel.create({
        name,
        email,
        profileImg,
        address,
        phone,
        password:hashPassword
    })

    const token = jwt.sign({id:user._id},process.env.JWT_SECRET)

    res.cookie("token",token,{
        expires: new Date("2038-12-31")
    })

    return res.status(201).json({
        message:"seller registered successfully",
        user:{
            id:user._id,
            name:user.name,
            email:user.email
        }
    })
}

async function sellerLogin(req,res){
    const {email,password} = req.body;
    const seller = await sellerModel.findOne({email});
    if(!seller){
        return res.status(400).json({
           message:"email or password is incorrect."
        })
    }
    const isPasswordCorrect = await bcrypt.compare(password,seller.password)
    if(!isPasswordCorrect){
        return res.status(400).json({
            message:"email or password is incorrect."
        })
    }

    const token = jwt.sign({id:seller._id},process.env.JWT_SECRET)
    
    res.cookie("token",token,{
        expires: new Date("2038-12-31")
    })

    return res.status(201).json({
        message:"seller logged in successfully.",
        seller:{
            id:seller._id,
            email:seller.email,
        }
    })
}

async function sellerLogout(req,res){
    res.clearCookie("token")
    return res.status(200).json({
        message:"seller logged out successfully."
    })
}

module.exports = {
    userRegister,
    userLogin,
    userLogout,
    sellerRegister,
    sellerLogin,
    sellerLogout
}