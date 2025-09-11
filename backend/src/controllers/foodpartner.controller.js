const sellerModel = require("../models/seller.model")

async function getSeller(req,res) {
	const id = req.params.id;
	const seller = await sellerModel.findById(id);
	res.status(200).json({
		seller
	})
}

module.exports = {
	getSeller
}