const cartModel = require("../models/cart.model");
const foodModel = require("../models/food.model");
const likeModel = require("../models/like.model");
const saveModel = require("../models/save.model");
const { uploadVideo } = require("../services/storage.service");
const { v4: uuidv4 } = require("uuid");

async function createFood(req, res) {
  const { name, ingredients, description,price } = req.body;
  const video = req.file;
  const seller = req.seller;
  const response = await uploadVideo(video.buffer, `${uuidv4()}`);

  const food = await foodModel.create({
    name,
    ingredients,
    description,
    video: response.url,
    seller: seller._id,
    price
  });

  return res.status(200).json({
    message: "video added successfully.",
    food,
  });
}

async function getFood(req, res) {
  const foods = await foodModel.find({});
  const foodGetter = req.authToken;
  res.status(200).json({
    message: "food items fetched successfully.",
    foods,
    foodGetter,
  });
}

async function likeFood(req, res) {
  const {foodId} = req.body;
  const user = req.user;
  const isUserLiked = await likeModel.findOne({
    food: foodId,
    user: user._id,
  });
  if (isUserLiked) {
    await likeModel.deleteOne({
      user: user._id,
      food: foodId,
    });
    await foodModel.findByIdAndUpdate(foodId, {
      $inc: { likeCount: -1 },
    });
    return res.status(200).json({
      message: "video unliked successfully.",
    });
  }
  const response = await likeModel.create({
    user: user._id,
    food: foodId,
  });
  await foodModel.findByIdAndUpdate(foodId, {
    $inc: { likeCount: 1 },
  });
  res.status(200).json({
    message: "like successfully.",
  });
}

async function cartFood(req, res) {
  const { foodId } = req.body;
  const user = req.user;
  const isUserSaved = await cartModel.findOne({
    food: foodId,
    user: user._id,
  });
  if (isUserSaved) {
    await cartModel.deleteOne({
      user: user._id,
      food: foodId,
    });
    await foodModel.findByIdAndUpdate(foodId, {
      $inc: { cartCount: -1 },
    });
    return res.status(200).json({
      message: "video remove from cart.",
    });
  }

  const response = await cartModel.create({
    user: user._id,
    food: foodId,
  });
  await foodModel.findByIdAndUpdate(foodId, {
    $inc: { cartCount: 1 },
  });
  return res.status(200).json({
    message: "add to cart successfully.",
  });
}

async function saveFood(req, res) {
  const { foodId } = req.body;
  const user = req.user;
  const isUserSaved = await saveModel.findOne({
    food: foodId,
    user: user._id,
  });
  if (isUserSaved) {
    await saveModel.deleteOne({
      user: user._id,
      food: foodId,
    });
    await foodModel.findByIdAndUpdate(foodId, {
      $inc: { saveCount: -1 },
    });
    return res.status(201).json({
      message: "video unsaved successfully.",
    });
  }

  const response = await saveModel.create({
    user: user._id,
    food: foodId,
  });
  await foodModel.findByIdAndUpdate(foodId, {
    $inc: { saveCount: 1 },
  });
  res.status(200).json({
    message: "save successfully.",
  });

}

async function getCartFood(req, res) {
  const user = req.user;
  const cartItems = await cartModel.find({ user: user._id }).populate('food');
  res.status(200).json({
    message:"cart food fetched successfully",
    cartItems
  })
}

module.exports = {
  createFood,
  getFood,
  likeFood,
  saveFood,
  cartFood,
  getCartFood
};
