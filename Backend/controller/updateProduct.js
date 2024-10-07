// const uploadProductPermission = require("../helper/permission");
// const productModel = require("../model/productModel");

// async function updateProductController(req, res) {
//   console.log(req.body)
//   try {
//     if (!uploadProductPermission(req.userId)) {
//       throw new Error("permission denied");


//     }
//     const { _id, ...resBody } = req.body;

//     const updateProduct = await productModel.findByIdAndUpdate(_id, resBody);

//     res.json({
//       message: "product updated successfully",
//       data: updateProduct,
//       success: true,
//       error: false,
//     });
//   } catch (err) {
//     res.status(400).json({
//       message: err.message || err,
//       error: true,
//       success: false,
//     });
//   }
// }

// module.exports = updateProductController;


const productModel = require("../model/productModel");

async function updateProductController(req, res) {
  try {
    const { _id, ...resBody } = req.body;

    const updateProduct = await productModel.findByIdAndUpdate(_id, resBody, {
      new: true, // Return the updated document
      runValidators: true, // Ensure validation is applied to the update
    });

    if (!updateProduct) {
      return res.status(404).json({
        message: "Product not found",
        error: true,
        success: false,
      });
    }

    res.json({
      message: "Product updated successfully",
      data: updateProduct,
      success: true,
      error: false,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}

module.exports = updateProductController;
