const express = require("express");
const router = express.Router();
const getCategoryProduct = require("../controller/categoryProduct");
const contactusController = require("../controller/contactus")
const searchProduct =require('../controller/searchProduct')
const getProductDetails = require("../controller/getProductDetails");
const addToCartController =require('../controller/addToCartController');

const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/') // Uploads directory
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)) // File name
    }
  });
  
  const upload = multer({ storage: storage });
  

const countAddToCartProduct = require("../controller/countAddToCartProduct");
const getCategoryWiseProductc = require("../controller/getCategoryWiseProduct");
// const UploadProductController = require("../controller/uploadProduct");
const updateProductController = require("../controller/updateProduct");
const getProductController = require("../controller/getProduct");
const UploadProductController = require("../controller/uploadProduct");
const LoginController = require("../controller/login/LoginController");
const filterProductController = require("../controller/filterProducts");
const deleteProductController = require("../controller/deleteProductController");



router.get("/get-categoryProduct", getCategoryProduct)
router.get('/countAddToCartProduct', countAddToCartProduct)
router.post('/category-product', getCategoryWiseProductc)


//  product
router.post("/uploadProduct", UploadProductController);
router.post("/update-product", updateProductController);
router.get("/get-product", getProductController);
router.delete("/delete-product/:productId", deleteProductController);

router.post("/product-details", getProductDetails)

router.get("/category", getCategoryProduct)

//contact Form routes
router.post("/contactusController",contactusController)
router.get("/search", searchProduct);

// loginghfh
router.post("/login", LoginController);
router.post("/addtoCart", addToCartController);




router.post('/filter-product',filterProductController)




module.exports = router;


