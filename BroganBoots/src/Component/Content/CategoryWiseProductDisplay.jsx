import React, { useContext, useEffect, useState } from "react";
import fetchCategoryWiseProduct from "../../helper/fetchCategoryWiseProduct";
import { Link } from "react-router-dom";
import addToCart from "../../helper/addToCart";
import Context from "../../context";
import scrollTop from "../../helper/scrollTop";

const CategoryWiseProductDisplay = ({ category, heading }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const categoryProduct = await fetchCategoryWiseProduct(category);
    setLoading(false);
    setData(categoryProduct?.data);
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  const loadingList = new Array(4).fill(null); // Limit to 4 placeholders for loading state
  const { fetchUserAddtoCart } = useContext(Context);

  const handleAddToCart = async (e, id) => {
    await addToCart(e, id);
    fetchUserAddtoCart();
  };

  return (
    <div className="container mx-auto p-5 pt-0">
      <div className="heading py-3">
        <h2 className="text-2xl font-semibold"> {heading}</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {loading
          ? loadingList.map((_, index) => (
              <div key={index} className="col-span-1">
                <div className="border-0 bg-white shadow rounded-lg p-4">
                  <div className="animate-pulse">
                    <div className="bg-gray-300 h-48 w-full"></div>
                  </div>
                </div>
              </div>
            ))
          : data.slice(0, 4).map((product, index) => (
              <div key={index} className="col-span-1 py-3">
                <div className="border-0 bg-white shadow rounded-lg">
                  <Link
                    to={"/product/" + product?._id}
                    className="nolink"
                    onClick={() => scrollTop()}
                  >
                    <div className="relative">
                      <div className="overflow-hidden rounded-lg">
                        <img
                          src={product.productImage[0]}
                          alt=""
                          className="w-full h-48 object-cover"
                        />
                      </div>
                      <span className="absolute top-2 left-2 bg-yellow-400 text-black text-xs font-semibold py-1 px-2 rounded">
                        SALE
                      </span>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold">{product.productName}</h3>
                      <div className="flex pt-2">
                        {/* Star rating */}
                        {Array.from({ length: 5 }, (v, i) => (
                          <i
                            key={i}
                            className={`fas fa-star text-yellow-500 ${
                              product.rating > i ? "checked" : ""
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-primary text-lg pt-2">
                        <del className="text-gray-500">
                          ₹{product.price}
                        </del>
                        {"  "}From ₹{product.sellingPrice}
                      </p>
                      <button
                        className="w-full bg-blue-500 text-white text-center uppercase py-2 mt-2 rounded hover:bg-blue-600 transition-all"
                        onClick={(e) => handleAddToCart(e, product?._id)}
                      >
                        Add To Cart
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default CategoryWiseProductDisplay;
