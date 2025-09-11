const foodModel = require('../models/food.model');
const {uploadVideo} = require('../services/storage.service');
const {v4:uuidv4} = require('uuid');

async function createFood(req,res) {
    const {name,ingredients,description} = req.body;
    const video = req.file;
    const seller =req.seller;
    const response = await uploadVideo(video.buffer,`${uuidv4()}`)

    
    const food = await foodModel.create({
        name,
        ingredients,
        description,
        video:response.url,
        seller:seller._id
    })
    

    return res.status(200).json({
        message:"video added successfully.",
        food
    })
}

async function getFood(req,res) {
    const foods = await foodModel.find({})
    const foodGetter = req.foodGetter;
    res.status(200).json({
        message:"food items fetched successfully.",
        foods,
        foodGetter
    })
}



module.exports = {
    createFood,
    getFood,
}