const express = require("express");
const router = express.Router();
const getCategoryProduct = require("../controller/categoryProduct");
const contactusController = require("../controller/contactus")
const searchProduct =require('../controller/searchProduct')
const getProductDetails = require("../controller/getProductDetails");
const addToCartController =require('../controller/addToCartController');





const countAddToCartProduct = require("../controller/countAddToCartProduct");
const getCategoryWiseProductc = require("../controller/getCategoryWiseProduct");
// const UploadProductController = require("../controller/uploadProduct");
const updateProductController = require("../controller/updateProduct");
const getProductController = require("../controller/getProduct");
const UploadProductController = require("../controller/uploadProduct");
const LoginController = require("../controller/login/LoginController");



router.get("/get-categoryProduct", getCategoryProduct)
router.get('/countAddToCartProduct', countAddToCartProduct)
router.post('/category-product', getCategoryWiseProductc)


//  product
router.post("/uploadProduct", UploadProductController);
router.post("/update-product", updateProductController);
router.get("/get-product", getProductController);
router.post("/product-details", getProductDetails)

router.get("/category", getCategoryProduct)

//contact Form routes
router.post("/contactusController",contactusController)
router.get("/search", searchProduct);

// login
router.post("/login", LoginController);






router.post("/addtoCart", addToCartController);
module.exports = router;


