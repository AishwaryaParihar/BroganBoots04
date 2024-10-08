import React, { useContext, useEffect, useState } from "react";
import fetchCategoryWiseProduct from "../../helper/fetchCategoryWiseProduct";
import { Link } from "react-router-dom";
import Context from "../../context";
import addToCart from "../../helper/addToCart"; 
import displayINRCurrency from '../../helper/displayCurrency'; // Import currency helper
import { toast } from 'react-toastify'; // Import toastify
import 'react-toastify/dist/ReactToastify.css'; // Toastify styles

const Cards = ({ category, heading }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const loadingList = new Array(4).fill(null);

  const { fetchUserAddtoCart } = useContext(Context);

  const handleAddToCart = async (e, id) => {
    try {
      await addToCart(e, id);
      fetchUserAddtoCart();
      toast.success("Product added to cart successfully!", {
        position: toast.POSITION.TOP_RIGHT
      });
    } catch (error) {
      toast.error("Failed to add product to cart!", {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const categoryProduct = await fetchCategoryWiseProduct(category);
      setData(categoryProduct?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error("Failed to fetch products!", {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <div className="container mx-auto p-5">
      <div className="text-center py-3">
        <h2 className="text-3xl font-bold underline">{heading}</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {loading
          ? loadingList.map((_, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-4">
                <div className="animate-pulse">
                  <div className="h-48 bg-gray-300 rounded-md"></div>
                </div>
              </div>
            ))
          : data.slice(0, 4).map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-4 flex flex-col h-full">
                <Link to={"product/" + product?._id} className="no-underline flex-grow">
                  <div className="relative flex-grow">
                    <div className="overflow-hidden rounded-md">
                      <img
                        src={product.productImage[0]}
                        alt="Product"
                        className="w-full h-60 object-cover"
                      />
                    </div>
                    {product?.sale && (
                      <span className="absolute top-0 left-0 bg-yellow-500 text-black px-2 py-1 uppercase text-xs font-bold">
                        Sale
                      </span>
                    )}
                  </div>
                  <div className="mt-4 flex flex-col justify-between flex-grow">
                    <h3 className="text-lg font-semibold">{product.productName}</h3>
                    <div className="mt-2 flex items-center">
                      {Array.from({ length: 5 }, (v, i) => (
                        <i
                          key={i}
                          className={`fas fa-star text-yellow-400 ${
                            product.rating > i ? "text-yellow-500" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-primary text-lg font-semibold mt-2">
                      <del className="text-gray-500">
                        {displayINRCurrency(product.price)} {/* INR formatted price */}
                      </del>{" "}
                      From{" "}
                      {displayINRCurrency(product.sellingPrice)} {/* INR formatted selling price */}
                    </p>
                    <button
                      className="mt-4 w-full bg-[#205F83] text-white py-2 px-4 rounded-md hover:bg-[#1e7cb3]"
                      onClick={(e) => handleAddToCart(e, product?._id)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </Link>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Cards;
