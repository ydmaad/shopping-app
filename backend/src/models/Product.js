const { default: mongoose } = require("mongoose");
const bcrypt = require("bcryptjs");

const ProductSchema = mongoose.Schema({
  writer: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    maxlength: 30,
  },
  description: String,
  price: {
    type: Number,
    default: 0,
  },
  images: {
    type: Array,
    default: [],
  },
  sold: {
    type: Number,
    default: 0,
  },
  continents: {
    type: Number,
    default: 1,
  },
  views: {
    type: Number,
    default: 0,
  },
});

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
