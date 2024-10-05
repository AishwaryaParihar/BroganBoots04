const express = require("express");
const getCategoryProduct = require("../controller/categoryProduct");
const countAddToCartProduct = require("../controller/countAddToCartProduct");
const getCategoryWiseProductc = require("../controller/getCategoryWiseProduct");

const router = express.Router();

router.get("/category", getCategoryProduct)
router.get('/countAddToCartProduct', countAddToCartProduct)
router.post('/category-product', getCategoryWiseProductc)
console.log("router")
module.exports = router;
