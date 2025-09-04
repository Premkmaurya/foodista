const mongoose = require("mongoose");

const mongoDb = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("db connected.");
    })
    .catch((err) => {
      console.log("db not connected.", err);
    });
};

module.exports = mongoDb;
