const express = require("express");
const app = express();
const db = require("./db");
require('dotenv').config();

const bodyParser = require("body-parser");
app.use(bodyParser.json());


const personRoutes = require("./routes/personRoutes");
const menuRoutes = require("./routes/menuRoutes");

app.use("/person", personRoutes);
app.use("/menu", menuRoutes);

const PORT = process.env.PORT || 3000;

app.get("/", function (req, res) {
  res.send(
    "Welcome to my hotel"
  );
});


app.listen(PORT, () => {
  console.log("listening on port 3000");
});
