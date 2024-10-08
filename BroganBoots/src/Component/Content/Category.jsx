import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import allCategory from "../../assets/logo.jpg";
import SummaryApi from "../../common/SummaryApi";

const Category = () => {
  const [categoryProduct, setCategoryProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const categoryLoading = new Array(13).fill(null);

  const fetchCategoryProduct = async () => {
    setLoading(true);
    const response = await fetch(SummaryApi.categoryProduct.url);
    const dataResponse = await response.json();
    setLoading(false);
    setCategoryProduct(dataResponse.data);
  };

  useEffect(() => {
    fetchCategoryProduct();
  }, []);

  const allCategoriesquarry = useMemo(
    () =>
      categoryProduct.map((prod, i) => {
        if (i !== 0) {
          return "&category=" + prod.category + "&";
        } else if (i === categoryProduct.length - 1) {
          return "&category=" + prod.category;
        } else {
          return "category=" + prod.category + "&";
        }
      }),
    [categoryProduct]
  );
 // Function to capitalize words
 const capitalizeWords = (str) => {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};
  return (
    <div className="container-fluid">
      <div className="">
        <div className="bg-gray-200 flex justify-center py-2">
          {loading && <p className="text-lg font-semibold">Loading...</p>}
          {!loading && (
            <div className="flex overflow-x-auto space-x-4">
              {categoryProduct.map((product, index) => (
                <div key={index} className="w-40 flex-shrink-0">
                  <Link
                    to={"/product-category?category=" + product?.category}
                    className="text-decoration-none text-center block"
                  >
                    <div className="category-img-box">
                      <img
                        src={product?.productImage[0]}
                        alt={product.category}
                        className="w-40 h-40 object-cover rounded-full"
                      />
                    </div>
                    <div className="py-2 text-uppercase font-semibold text-lg">
                      {capitalizeWords(product.category)} {/* Capitalize category name */}
                    </div>
                  </Link>
                </div>
              ))}
              <div className="border w-40 flex-shrink-0">
                <Link className="text-decoration-none text-center block" to={`/product-category?${allCategoriesquarry}`}>
                  <div className="category-img-box">
                    <img src={allCategory} alt="" className="w-40 h-40 object-cover rounded-full" />
                  </div>
                  <div className="pt-2 text-capitalize text-lg font-semibold">All categories</div>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Category;
