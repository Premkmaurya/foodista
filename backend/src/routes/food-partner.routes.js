const express = require('express')
const router = express.Router()
const authMiddleware = require('../middleware/auth.middleware')
const foodPartnerController = require("../controllers/foodpartner.controller")

router.get('/:id',authMiddleware.authUserMiddleware,foodPartnerController.getSeller)


module.exports = router;