const jwt = require('jsonwebtoken');
const sellerModel = require('../models/seller.model');
const userModel = require('../models/user.model');

async function authSellerMiddleware(req, res, next) {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({
            message:"login first."
        })
    }
    try {
        const decoded = jwt.verify(token , process.env.JWT_SECRET)
        const seller = await sellerModel.findById(decoded.id);
        req.seller = seller;
        next()
    } catch (error) {
        return res.status(401).json({
            message:"invalid token."
        })
    }
}

async function authUserMiddleware(req, res, next) {
    const token = req.cookies.token;
    if (!token) {
        return res.status(400),json({
            message:"login first."
        })
    }
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        const user = await userModel.findById(decoded.id);
        req.user = user;
        next()
    }catch(err){
        return res.status(400).json({
            message:"unauthorized access."
        })
    }
}

module.exports = {
    authSellerMiddleware,
    authUserMiddleware
}