const userModel = require("../models/user.model")

async function getUser(req,res) {
    const user = req.user;
    res.status(200).json({
        user
    })
}

module.exports =  getUser;
