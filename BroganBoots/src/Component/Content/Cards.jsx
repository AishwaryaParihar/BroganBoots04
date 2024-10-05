import React, { useContext, useEffect, useState } from "react";
import fetchCategoryWiseProduct from "../../helper/fetchCategoryWiseProduct";
import { Link } from "react-router-dom";
import Context from "../../context";
import addToCart from "../../helper/addToCart"; 
import img from "../../assets/EXTRALARGE.jpg"


const Cards = ({ category, heading }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const loadingList = new Array(4).fill(null);

  const { fetchUserAddtoCart } = useContext(Context);

  const handleAddToCart = async (e, id) => {
    await addToCart(e, id);
    fetchUserAddtoCart();
  };

  const fetchData = async () => {
    setLoading(true);
    const categoryProduct = await fetchCategoryWiseProduct(category);
    setLoading(false);
    setData(categoryProduct?.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

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
              <div key={index} className="bg-white rounded-lg shadow-lg p-4">
                <Link to={"product/" + product?._id} className="no-underline">
                  <div className="relative">
                    <div className="overflow-hidden rounded-md">
                      <img
                        src={product.productImage[0]}
                        alt=""
                        className="w-full h-48 object-cover"
                      />
                    </div>
                    <span className="absolute top-0 left-0 bg-yellow-500 text-black px-2 py-1 uppercase text-xs font-bold">
                      Sale
                    </span>
                  </div>
                  <div className="mt-4">
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
                        <i className="fas fa-rupee-sign text-sm"></i>
                        {product.price}
                      </del>{" "}
                      From{" "}
                      <i className="fas fa-rupee-sign text-sm"></i>
                      {product.sellingPrice}
                    </p>
                    <button
                      className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                      onClick={(e) => handleAddToCart(e, product?._id)}
                    >
                      View Product
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
