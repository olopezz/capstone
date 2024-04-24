const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// GET all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find().catch((err) => {
      throw new Error(
        "Error retrieving products from the database: " + err.message
      );
    });
    res.json(products);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// POST a new product
router.post("/", async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const product = await newProduct.save().catch((err) => {
      throw new Error("Error saving product to the database: " + err.message);
    });
    res.status(201).json(product);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;
