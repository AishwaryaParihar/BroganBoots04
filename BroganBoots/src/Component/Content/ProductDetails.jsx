import React, { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SummaryApi from "../../../common/Index";
import displayINRCurrency from "../../../helper/displayCurrency";
import shipping from "../../../assets/shipping.avif";
import gr from "../../../assets/GuaranteedReturn.avif";
import expertG from "../../../assets/expertguidence.webp";
import ProductAccordian from "./ProductAccordian";
import SocialMedia from "./SocialMedia";
import FAQ from "./FAQ";
import CategoryWiseProductDisplay from "./CategoryWiseProductDisplay";
import addToCart from "../../../helper/addToCart";
import Context from "../../../context/index";
import ProductDetailsImg from "./ProductDetailsImg";

const ProductDetails = () => {
  const [data, setData] = useState({
    productName: " ",
    brandName: " ",
    category: " ",
    productImage: [],
    description: "",
    price: " ",
    sellingPrice: " ",
    availablesizes: [],
    unavailablesizes: [],
    color: ""
  });
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const productImageListLoading = new Array(4).fill(null);
  const [activeImage, setActiveImage] = useState("");
  const [count, setCount] = useState(1);

  const [selectedSize, setSelectedSize] = useState(""); // Default selected size
  const sizes = [6, 7, 8, 9, 10, 11, 12];

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const sizetable = [
    { size: 6, cm: "24.6cm" },
    { size: 7, cm: "25.4cm" },
    { size: 8, cm: "26.2cm" },
    { size: 9, cm: "27.1cm" },
    { size: 10, cm: "27.9cm" },
    { size: 11, cm: "28.8cm" },
    { size: 12, cm: "29.6cm" },
    { size: 13, cm: "30.5cm" },
  ];

  const { fetchUserAddToCart } = useContext(Context);
  const navigate = useNavigate();

  const fetchProductDetails = async () => {
    setLoading(true);
    const response = await fetch(SummaryApi.productDetails.url, {
      method: SummaryApi.productDetails.method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        productId: params?.id,
      }),
    });
    const dataReponse = await response.json();
    setLoading(false);
    setData(dataReponse?.data);
    setActiveImage(dataReponse?.data?.productImage[0]);
  };

  useEffect(() => {
    fetchProductDetails();
  }, [params]);

  const handleMouseEnterProduct = (imageURL) => {
    setActiveImage(imageURL);
  };

  const handleAddToCart = async (e, id) => {
    await addToCart(e, id, selectedSize);
    fetchUserAddToCart();
  };

  const handleBuyProduct = async (e, id) => {
    await addToCart(e, id);
    fetchUserAddToCart();
    navigate("/cart");
  };

  return (
    <>
      <div className="container mx-auto px-4 py-10 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* product image  */}
          <div className="flex flex-col items-center">
            <div className="w-full border">
              <img
                src={activeImage}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2 mt-4">
              {loading ? (
                <div className="flex gap-2">
                  {productImageListLoading.map((el, index) => (
                    <div key={index} className="text-center">
                      loading...
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex gap-2">
                  {data?.productImage?.map((imgURL, index) => (
                    <div key={imgURL} className="cursor-pointer">
                      <img
                        src={imgURL}
                        alt=""
                        className="w-20 h-20 object-cover border"
                        onMouseEnter={() => handleMouseEnterProduct(imgURL)}
                        onClick={() => handleMouseEnterProduct(imgURL)}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* product details  */}
          <div>
            <h2 className="text-3xl font-semibold mb-2">{data?.productName}</h2>
            <div className="text-yellow-500 mb-2">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i> 4.8
            </div>
            <div className="text-lg mb-4">
              <del className="text-gray-500">{displayINRCurrency(data?.price)}</del>{" "}
              {displayINRCurrency(data?.sellingPrice)}{" "}
              <span className="bg-yellow-400 text-green-700 px-2 py-1 rounded-md text-sm">
                Sale
              </span>
            </div>
            <p className="text-lg mb-6">{data?.description}</p>

            {/* select size  */}
            <div className="mb-4">
              <strong>Size: </strong> Order ½ size smaller than you wear in sneakers. Find my size
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              {data.availablesizes.map((size) => (
                <div key={size} className="cursor-pointer">
                  <input
                    type="radio"
                    name="Size"
                    className={`hidden ${
                      data.unavailablesizes.includes(size)
                        ? "bg-gray-300"
                        : "bg-white"
                    }`}
                    id={`size-${size}`}
                    value={size}
                    checked={selectedSize === size.toString()}
                    onChange={() => handleSizeChange(size.toString())}
                  />
                  <label
                    htmlFor={`size-${size}`}
                    className={`block px-4 py-2 border rounded-lg ${
                      selectedSize === size.toString() ? "border-green-500" : "border-gray-300"
                    }`}
                  >
                    {size}
                  </label>
                </div>
              ))}
            </div>

            {data.color && (
              <div className="flex items-center gap-2 mb-6">
                <span className="text-lg font-semibold">Color:</span>
                <div
                  className="w-5 h-5 rounded-full"
                  style={{ backgroundColor: `${data.color}` }}
                ></div>
              </div>
            )}

            {/* number of product */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  className="px-4 py-2"
                  onClick={() => {
                    if (count > 1) {
                      setCount(count - 1);
                    }
                  }}
                >
                  -
                </button>
                <input
                  type="text"
                  className="w-12 text-center"
                  value={count}
                  onChange={(e) => setCount(parseInt(e.target.value))}
                />
                <button
                  className="px-4 py-2"
                  onClick={() => setCount(count + 1)}
                >
                  +
                </button>
              </div>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg uppercase"
                onClick={(e) => handleAddToCart(e, data?._id)}
              >
                Add to cart
              </button>
            </div>

            {/* size chart table */}
            <div className="overflow-auto mb-6">
              <h5 className="text-xl font-semibold mb-3">Size Chart</h5>
              <table className="table-auto w-full border border-gray-300">
                <thead>
                  <tr className="border border-gray-300">
                    <th className="px-4 py-2">Size</th>
                    {sizetable.map((item) => (
                      <th key={item.size} className="px-4 py-2">{item.size}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border border-gray-300">
                    <td className="font-semibold px-4 py-2">CMS</td>
                    {sizetable.map((item) => (
                      <td key={item.size} className="px-4 py-2">{item.cm}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            {/* buy now button */}
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-lg uppercase"
              onClick={(e) => handleBuyProduct(e, data?._id)}
            >
              Buy Now
            </button>
          </div>
        </div>

        {/* Product accordion */}
        <div className="mt-10">
          <ProductAccordian />
        </div>

        {/* Social media */}
        <div className="mt-10">
          <SocialMedia />
        </div>

        {/* FAQ */}
        <div className="mt-10">
          <FAQ />
        </div>

        {/* Category wise product display */}
        <div className="mt-10">
          <CategoryWiseProductDisplay />
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
