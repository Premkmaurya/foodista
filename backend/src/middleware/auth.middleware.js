const jwt = require('jsonwebtoken');
const sellerModel = require('../models/seller.model');

async function authMiddleware(req, res, next) {
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

module.exports = authMiddleware