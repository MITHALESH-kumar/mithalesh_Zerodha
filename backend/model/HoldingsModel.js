
// const { Schema } = require("mongoose");

// const HoldingsSchema = new Schema({
//   name: String,
//   qty: Number,
//   avg: Number,
//   price: Number,
//   net: String,
//   day: String,
// });

// module.exports = { HoldingsSchema };

const mongoose = require("mongoose");

const HoldingsSchema = new mongoose.Schema({
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
});

const HoldingsModel = mongoose.model("Holding", HoldingsSchema);

module.exports = HoldingsModel;
