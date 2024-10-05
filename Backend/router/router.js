const express = require("express");
const getCategoryProduct = require("../controller/categoryProduct");

const router = express.Router();

router.get("/category", getCategoryProduct)
console.log("router")
module.exports = router;
