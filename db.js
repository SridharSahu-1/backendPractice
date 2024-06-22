const mongoose = require("mongoose");
require("dotenv").config();

// const mongoURL = process.env.DB_URL_LOCAL;
const mongoURL = process.env.DB_URL;
mongoose.connect(
  mongoURL
  // ,{useNewUrlParser: true, useUnifiedTopology: true}
);

const db = mongoose.connection;

db.on("connected", () => {
  console.log("Mongoose is connected");
});

db.on("disconnected", () => {
  console.log("Mongoose is disconnected");
});

db.on("error", (err) => {
  console.log("Mongoose connection error: " + err);
});

module.exports = db;
