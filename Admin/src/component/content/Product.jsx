import React, { useEffect, useState } from "react";
import { UploadProduct } from "./UploadProduct";
import SummaryApi from "../../common/index";
import AdminProductCard from "./AdminProductCard";

function Products() {
  const [openUploadProduct, setOpenUploadProduct] = useState(false);
  const [allProduct, setAllProduct] = useState([]);

  const fetchAllProduct = async () => {
    const response = await fetch(SummaryApi.allProduct.url);
    const dataResponse = await response.json();

    console.log('product', dataResponse);

    setAllProduct(dataResponse?.data || []);
  };

  useEffect(() => {
    fetchAllProduct();
  }, []);

  return (
    <>
      <div className="bg-white shadow-md flex justify-between items-center p-4 mt-2">
        <h2 className="font-bold ps-3">Product</h2>
        <button
          className="bg-green-500 text-black font-bold rounded-lg px-4 py-2"
          onClick={() => setOpenUploadProduct(true)}
        >
          Upload Products
        </button>
      </div>

      <div className="flex gap-3 items-center flex-wrap m-3">
        {
          allProduct.map((product, index) => (
            <AdminProductCard data={product} key={index + "allProduct"} fetchdata={fetchAllProduct} />
          ))
        }
      </div>

      {/* upload product component */}
      {openUploadProduct && (
        <UploadProduct onClose={() => setOpenUploadProduct(false)} fetchData={fetchAllProduct} />
      )}
    </>
  );
}

export default Products;
