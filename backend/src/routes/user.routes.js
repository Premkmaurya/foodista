const express = require('express')
const router = express.Router()
const authMiddleware = require('../middleware/auth.middleware')
const getUser = require("../controllers/user.controller")

router.get('/:id',authMiddleware.authUserMiddleware,getUser)


module.exports = router;