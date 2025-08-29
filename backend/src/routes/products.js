const express = require("express");
const User = require("../models/User");
const router = express.Router();
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");

router.post("/", auth, async (req, res, next) => {
  try {
    const product = new Product(req.body);
    product.save();

    return res.sendStatus(201);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
