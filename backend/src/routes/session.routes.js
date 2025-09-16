const express = require('express')
const router = express.Router();
const middleware = require('../middleware/auth.middleware');



router.post("/seller", middleware.authSellerMiddleware, (req, res) => {
  const seller = req.seller;
  if (seller) {
    return res.status(200).json({
      message: "seller verified successfully."
    });
  }
  return res.status(400).json({
    message: "register as a seller."
  });
});


router.post("/user", middleware.authMiddleware, (req, res) => {
  const user = req.authToken;
  if (user) {
    return res.status(200).json({
      message: "seller verified successfully."
    });
  }
  return res.status(400).json({
    message: "register as a seller."
  });
});


module.exports = router