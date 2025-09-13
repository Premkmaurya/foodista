const express = require('express');
const router = express.Router();
const middleware = require('../middleware/auth.middleware');
const foodController = require('../controllers/food.controller');
const multer = require('multer');

const upload = multer({storage: multer.memoryStorage()})

router.post('/',middleware.authSellerMiddleware,upload.single('video'),foodController.createFood)
router.get('/',middleware.authMiddleware,foodController.getFood)

router.post('/like',middleware.authUserMiddleware,foodController.likeFood);
router.post('/save',middleware.authUserMiddleware,foodController.saveFood);
router.post('/cart',middleware.authUserMiddleware,foodController.cartFood);


module.exports = router;