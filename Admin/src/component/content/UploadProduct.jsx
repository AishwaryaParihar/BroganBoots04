import React, { useState } from "react";
import { FaTimes, FaCloudUploadAlt, FaTrash } from "react-icons/fa"; // Importing react-icons
import ProductCategory from "../../helper/ProductCategory";
import UploadImage from "../../helper/UploadImage";
import DisplayImage from "./DisplayImage";
// import SummaryApi from "../../common/index";
import { toast } from "react-toastify";
import ProductSize from "./productSize";
import SummaryApi from "../../common";

export const UploadProduct = ({ onClose, fetchData }) => {
  const [data, setData] = useState({
    productName: "",
    brandName: "",
    category: "",
    productImage: [],
    availablesizes: [],
    unavailablesizes: [],
    description: "",
    price: "",
    sellingPrice: "",
    weight: "",
    smallBigSize: "",
    color: "",
    productFeatures: "",
  });

  const [openFullScreenImage, setOpenFullScreenImage] = useState(false);
  const [fullScreenImage, setFullScreenImage] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleProductSize = (e) => {
    const { value } = e.target;
    setData((prev) => ({
      ...prev,
      availablesizes: [...prev.availablesizes, value],
    }));
  };

  const handleUploadProduct = async (e) => {
    const file = e.target.files[0];
    const uploadImageCloudinary = await UploadImage(file);

    setData((prev) => ({
      ...prev,
      productImage: [...prev.productImage, uploadImageCloudinary.url],
    }));
  };

  const handleDeleteProductImage = async (index) => {
    const newProductImage = [...data.productImage];
    newProductImage.splice(index, 1);
    setData((prev) => ({
      ...prev,
      productImage: [...newProductImage],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(SummaryApi.uploadProduct.url, {
      method: SummaryApi.uploadProduct.method,
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
      fetchData();
    }

    if (responseData.error) {
      toast.error(responseData?.message);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-gray-800">
      <div className="p-6 bg-white rounded shadow-lg w-full max-w-3xl h-full overflow-y-auto">
        <div className="flex justify-between mb-4">
          <h3 className="font-bold text-lg">Upload Product</h3>
          <FaTimes // Replaced Font Awesome times icon
            className="text-2xl cursor-pointer"
            onClick={onClose}
          />
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <label htmlFor="productName" className="block font-semibold">
            Product Name:
          </label>
          <input
            type="text"
            id="productName"
            placeholder="Enter Product Name"
            name="productName"
            value={data.productName}
            onChange={handleOnChange}
            className="p-2 rounded border border-gray-300 w-full"
            required
          />

          <label htmlFor="brandName" className="block font-semibold">
            Brand Name:
          </label>
          <input
            type="text"
            id="brandName"
            placeholder="Enter Brand Name"
            name="brandName"
            value={data.brandName}
            onChange={handleOnChange}
            className="p-2 rounded border border-gray-300 w-full"
            required
          />

          <label htmlFor="category" className="block font-semibold">
            Category:
          </label>
          <select
            required
            onChange={handleOnChange}
            name="category"
            id="category"
            value={data.category}
            className="p-2 rounded border border-gray-300 w-full"
          >
            <option value="">Select Category</option>
            {ProductCategory.map((el, index) => (
              <option value={el.value} key={el.value + index}>
                {el.label}
              </option>
            ))}
          </select>

          <label htmlFor="productImage" className="block font-semibold">
            Product Image:
          </label>
          <label htmlFor="uploadImageInput" className="flex flex-col items-center">
            <div className="bg-gray-100 rounded p-4 flex flex-col items-center cursor-pointer">
              <FaCloudUploadAlt // Replaced Font Awesome cloud upload icon
                className="text-2xl text-gray-500"
              />
              <p className="text-gray-500 mt-2">Upload Product Image</p>
              <input
                className="hidden"
                type="file"
                id="uploadImageInput"
                onChange={handleUploadProduct}
              />
            </div>
          </label>

          <div className="flex flex-wrap gap-2">
            {data.productImage.length > 0 ? (
              data.productImage.map((el, index) => (
                <div className="relative" key={index}>
                  <img
                    src={el}
                    alt={el}
                    width={103.5}
                    height={103.5}
                    className="bg-gray-100 border cursor-pointer"
                    onClick={() => {
                      setOpenFullScreenImage(true);
                      setFullScreenImage(el);
                    }}
                  />
                  <div
                    className="absolute bottom-0 right-0 bg-red-600 text-white p-1 rounded-full cursor-pointer"
                    onClick={() => handleDeleteProductImage(index)}
                  >
                    <FaTrash // Replaced Font Awesome trash icon
                      className="text-white"
                    />
                  </div>
                </div>
              ))
            ) : (
              <p className="text-green-600">*Please Upload product image</p>
            )}
          </div>

          <label htmlFor="price" className="block font-semibold">
            Price:
          </label>
          <input
            type="number"
            id="price"
            placeholder="Enter Product Price"
            name="price"
            value={data.price}
            onChange={handleOnChange}
            className="p-2 rounded border border-gray-300 w-full"
            required
          />

          <label htmlFor="sellingPrice" className="block font-semibold">
            Selling Price:
          </label>
          <input
            type="number"
            id="sellingPrice"
            placeholder="Enter Product Selling Price"
            name="sellingPrice"
            value={data.sellingPrice}
            onChange={handleOnChange}
            className="p-2 rounded border border-gray-300 w-full"
            required
          />

          <label htmlFor="weight" className="block font-semibold">
            Weight:
          </label>
          <input
            type="number"
            id="weight"
            placeholder="Enter Product Weight"
            name="weight"
            value={data.weight}
            onChange={handleOnChange}
            className="p-2 rounded border border-gray-300 w-full"
            required
          />

          <label htmlFor="smallBigSize" className="block font-semibold">
            Small and Big Size:
          </label>
          <input
            type="text"
            id="smallBigSize"
            placeholder="Smallest size you have available"
            name="smallBigSize"
            value={data.smallBigSize}
            onChange={handleOnChange}
            className="p-2 rounded border border-gray-300 w-full"
            required
          />

          <div>
            <label className="block font-semibold">Choose Available Sizes:</label>
            <div className="flex gap-2">
              {new Array(7).fill(0).map((_, i) => (
                <ProductSize size={String(i + 6)} handleProductSize={handleProductSize} key={i} />
              ))}
            </div>
          </div>

          <label htmlFor="color" className="block font-semibold">
            Color:
          </label>
          <input
            type="text"
            id="color"
            placeholder="Enter color in hex or RGB"
            name="color"
            value={data.color}
            onChange={handleOnChange}
            className="p-2 rounded border border-gray-300 w-full"
            required
          />

          <label htmlFor="features" className="block font-semibold">
            Features:
          </label>
          <input
            type="text"
            id="features"
            placeholder="Enter Product Features"
            name="features"
            value={data.productFeatures}
            onChange={handleOnChange}
            className="p-2 rounded border border-gray-300 w-full"
            
          />

          <label htmlFor="description" className="block font-semibold">
            Description:
          </label>
          <textarea
            id="description"
            placeholder="Enter Product Description"
            name="description"
            value={data.description}
            onChange={handleOnChange}
            rows={4}
            className="p-2 rounded border border-gray-300 w-full"
          ></textarea>

          <button className="bg-green-500 text-white py-2 rounded w-full">
            Upload Product
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
