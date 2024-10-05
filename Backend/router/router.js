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


module.exports = router;
