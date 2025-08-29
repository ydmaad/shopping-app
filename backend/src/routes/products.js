const express = require("express");
const User = require("../models/User");
const Product = require("../models/Product");
const router = express.Router();
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});
const upload = multer({ storage: storage }).single("file");

router.post("/", auth, async (req, res, next) => {
  try {
    const product = new Product(req.body);
    await product.save();
    return res.sendStatus(201);
  } catch (error) {
    next(error);
  }
});

router.post("/image", auth, async (req, res, next) => {
  upload(req, res, (err) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.json({ fileName: req.file.filename });
  });
});

router.get("/", async (req, res, next) => {
  try {
    const products = await Product.find().populate("writer");
    return res.status(200).json({
      products,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
