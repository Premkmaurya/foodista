const foodModel = require('../models/food.model');
const uploadImage = require('../services/storage.service');
const {v4:uuidv4} = require('uuid');

async function createFood(req,res) {
    const {name,description} = req.body;
    const video = req.file;
    const seller =req.seller;
    const response = await uploadImage(video.buffer,`${uuidv4()}`)
    
    const food = await foodModel.create({
        name,
        description,
        video:response,
        seller:seller._id
    })
    

    res.status(200).json({
        message:"video added successfully."
        food
    })
}

module.exports = {
    createFood
}