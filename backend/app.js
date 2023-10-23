const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const order = require("./routes/order");
const bodyParser = require("body-parser");

require("dotenv").config();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", order);

app.listen(process.env.PORT, () => {
  console.log(`listening in port ${process.env.PORT}`);
});

mongoose
  .connect(
    "mongodb://fahyins:221105230474@ac-gw41l0s-shard-00-00.x949qyu.mongodb.net:27017,ac-gw41l0s-shard-00-01.x949qyu.mongodb.net:27017,ac-gw41l0s-shard-00-02.x949qyu.mongodb.net:27017/?ssl=true&replicaSet=atlas-q7h3ls-shard-0&authSource=admin&retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));
