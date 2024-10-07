import React, { useEffect, useState } from "react";
import "./Admin.css";
import ProductCategory from "../../helper/ProductCategory";
import UploadImage from "../../helper/UploadImage";
import DisplayImage from "./DisplayImage";
import SummaryApi from "../../common/index";
import { toast } from "react-toastify";
import ProductSize from "./productSize";
import { RxCross2 } from "react-icons/rx";
import { IoCloudUploadSharp } from "react-icons/io5";
import { AiTwotoneDelete } from "react-icons/ai";

const AdminEditProduct = ({ onClose, productData, fetchdata }) => {
  const [data, setData] = useState({
    ...productData,
    productName: productData?.productName,
    brandName: productData?.brandName,
    category: productData?.category,
    productImage: productData?.productImage || [],
    description: productData?.description,
    price: productData?.price,
    availablesizes: productData?.availablesizes,
    sellingPrice: productData?.sellingPrice,
  });

  const [showSize, setShowSize] = useState(() => {
    return productData?.availablesizes.map((size) => {
      return {
        size,
        selected: true,
      };
    });
  });

  const [openFullScreenImage, setOpenFullScreenImage] = useState(false);
  const [fullScreenImage, setFullScreenImage] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleSize = (e) => {
    const { name } = e.target;

    setShowSize((prev) => {
      return prev.map((size) => {
        return {
          size: size.size,
          selected: size?.size === name ? !size.selected : size.selected,
        };
      });
    });
  };

  const handleUploadProduct = async (e) => {
    const file = e.target.files[0];
    const uploadImageCloudinary = await UploadImage(file);

    setData((preve) => {
      return {
        ...preve,
        productImage: [...preve.productImage, uploadImageCloudinary.url],
      };
    });
  };

  const handleDeleteProductImage = async (index) => {
    const newProductImage = [...data.productImage];
    newProductImage.splice(index, 1);
    setData((preve) => {
      return {
        ...preve,
        productImage: [...newProductImage],
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const filteredSizes = showSize
      ?.filter((size) => size.selected)
      .map((size) => size.size);
    setData((prev) => {
      return {
        ...prev,
        availablesizes: filteredSizes,
      };
    });

    const response = await fetch(SummaryApi.updateProduct.url, {
      method: SummaryApi.updateProduct.method,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();
    if (responseData.success) {
      toast.success(responseData?.message);
      onClose();
      fetchdata();
    }

    if (responseData.error) {
      toast.error(responseData?.message);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="p-4 bg-white rounded shadow-md w-full max-w-3xl h-auto max-h-[95vh] overflow-y-auto">
        <div className="flex justify-between">
          <h3 className="font-bold text-xl">Edit Product</h3>
         
          <RxCross2 className="cursor-pointer text-2xl" onClick={onClose} />
        </div>
        <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
          <label htmlFor="productName">Product Name:</label>
          <input
            type="text"
            id="productName"
            placeholder="Enter Product Name"
            name="productName"
            value={data.productName}
            onChange={handleOnChange}
            className="w-full p-2 border rounded bg-gray-100"
            required
          />

          <label htmlFor="brandName">Brand Name:</label>
          <input
            type="text"
            id="brandName"
            placeholder="Enter Brand Name"
            name="brandName"
            value={data.brandName}
            onChange={handleOnChange}
            className="w-full p-2 border rounded bg-gray-100"
            required
          />

          <label htmlFor="category">Category:</label>
          <select
            required
            onChange={handleOnChange}
            name="category"
            id="category"
            value={data.category}
            className="w-full p-2 border rounded bg-gray-100"
          >
            <option value={""}>Select Category</option>
            {ProductCategory.map((el, index) => (
              <option value={el.value} key={el.value + index}>
                {el.label}
              </option>
            ))}
          </select>

          <div>
            <label>Available Sizes:</label>
            <div className="flex flex-wrap gap-2">
              {showSize.length !== 0 &&
                showSize?.map((size) => (
                  <div key={size.size} className="flex items-center">
                    <label htmlFor={size.size} className="mr-2">
                      {size.size}
                    </label>
                    <input
                      type="checkbox"
                      name={size.size}
                      id={size.size}
                      value={size.size}
                      checked={size.selected}
                      onChange={handleSize}
                      className="form-checkbox h-5 w-5"
                    />
                  </div>
                ))}
            </div>
          </div>

          <label htmlFor="productImage">Product Image:</label>
          <label htmlFor="uploadImageInput">
            <div className="bg-gray-100 rounded flex flex-col items-center cursor-pointer">
            
              <IoCloudUploadSharp className='text-3xl text-gray-600' />
              <p className="text-gray-600">Upload Product Image</p>
              <input
                className="hidden"
                type="file"
                id="uploadImageInput"
                onChange={handleUploadProduct}
              />
            </div>
          </label>
          <div>
            {data?.productImage[0] ? (
              <div className="flex flex-wrap gap-2">
                {data.productImage.map((el, index) => (
                  <div key={index} className="relative">
                    <img
                      src={el}
                      alt={el}
                      width={104}
                      height={104}
                      className="bg-gray-100 border cursor-pointer"
                      onClick={() => {
                        setOpenFullScreenImage(true);
                        setFullScreenImage(el);
                      }}
                    />
                    <div
                      className="absolute bottom-0 right-0 p-1 bg-red-600 text-white rounded cursor-pointer"
                      onClick={() => handleDeleteProductImage(index)}
                    >
                    
                      <AiTwotoneDelete />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-green-600">*Please Upload product image</p>
            )}
          </div>

          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            placeholder="Enter Product price"
            name="price"
            value={data.price}
            onChange={handleOnChange}
            className="w-full p-2 border rounded bg-gray-100"
            required
          />

          <label htmlFor="sellingPrice">Selling Price:</label>
          <input
            type="number"
            id="sellingPrice"
            placeholder="Enter Product Selling Price"
            name="sellingPrice"
            value={data.sellingPrice}
            onChange={handleOnChange}
            className="w-full p-2 border rounded bg-gray-100"
            required
          />

          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            placeholder="Enter Product Description"
            name="description"
            value={data.description}
            onChange={handleOnChange}
            rows={4}
            className="w-full p-2 border rounded bg-gray-100"
          />

          <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-500">
            Update Product
          </button>
        </form>
      </div>

      {openFullScreenImage && (
        <DisplayImage
          onClose={() => setOpenFullScreenImage(false)}
          imgUrl={fullScreenImage}
        />
      )}
    </div>
  );
};

export default AdminEditProduct;
