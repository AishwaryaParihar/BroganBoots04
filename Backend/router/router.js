const express = require("express");
const router = express.Router();
const getCategoryProduct = require("../controller/categoryProduct");
const contactusController = require("../controller/contactus")
const searchProduct =require('../controller/searchProduct')
<<<<<<< HEAD
const getProductDetails = require("../controller/getProductDetails");
const addToCartController =require('../controller/addToCartController');
=======
const aboutController =require('../controller/aboutController')
const router = express.Router();
const multer = require('multer');
const path = require('path');

// Multer setup for file upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads');
    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  });
  
  const upload = multer({ storage: storage });
>>>>>>> 03bece82fc4fe6fe8f39a7b955e875e8b676e3e0





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



router.get('/getAbout', aboutController.getAbout);

// POST update about (with image upload)
router.post('/updateAbout', upload.single('image'), aboutController.updateAbout);








module.exports = router;


