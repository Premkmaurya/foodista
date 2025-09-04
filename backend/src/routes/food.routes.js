const express = require('express');
const router = express.Router();
const middleware = require('../middleware/auth.middleware');
const foodController = require('../controllers/food.controller');
const multer = require('multer');

const upload = multer({storage: multer.memoryStorage()})

router.post('/',middleware.authSellerMiddleware,upload.single('video'),foodController.createFood)
router.get('/',middleware.authUserMiddleware,foodController.getFood)


module.exports = router;