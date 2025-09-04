const express = require('express');
const authController = require('../controllers/auth.controller');
const router = express.Router();


// user's routes
router.post('/user/register',authController.userRegister)
router.post('/user/login',authController.userLogin)
router.get('/user/logout',authController.userLogout)


//seller's routes
router.post('/seller/register',authController.sellerRegister)
router.post('/seller/login',authController.sellerLogin)
router.get('/seller/logout',authController.sellerLogout)


module.exports = router;