const express = require("express");
const getCategoryProduct = require("../controller/categoryProduct");
const contactusController = require("../controller/contactus")
// const contactUsControllers =require('../controller/contactUsControllers')
const router = express.Router();

router.get("/category", getCategoryProduct)

//contact Form routes
router.post("/contactusController",contactusController)


// router.post("/createContact",contactUsControllers.createContact)
// router.get("/getContacts",contactUsControllers.getContacts)
// router.get("/getContactById",contactUsControllers.getContactById)


const countAddToCartProduct = require("../controller/countAddToCartProduct");
const getCategoryWiseProductc = require("../controller/getCategoryWiseProduct");
const UploadProductController = require("../controller/uploadProduct");
const updateProductController = require("../controller/updateProduct");
const getProductController = require("../controller/getProduct");



router.get("/category", getCategoryProduct)
router.get('/countAddToCartProduct', countAddToCartProduct)
router.post('/category-product', getCategoryWiseProductc)
console.log("router")


//  product
router.post("/upload-product", UploadProductController);
router.post("/update-product", updateProductController);
router.get("/get-product", getProductController);

module.exports = router;


