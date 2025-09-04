const ImageKit = require("imagekit");

const imagekit = new ImageKit({
    publicKey : process.env.PUBLICKEY,
    privateKey : process.env.PRIVATEKEY,
    urlEndpoint : process.env.URLENDPOINT
});

async function uploadImage(file,filename){
    const response = await imagekit.upload({
        file:file,
        fileName:filename,
        folder:"foods"
    })
    return response;
}

module.exports = uploadImage;