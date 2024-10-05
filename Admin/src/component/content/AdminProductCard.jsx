import React, { useState } from "react";
import AdminEditProduct from "./AdminEditProduct";
import displayINRCurrency from "../../helper/displayINRCurrency";

const AdminProductCard = ({ data, fetchdata }) => {
  const [editProduct, setEditProduct] = useState(false);

  return (
    <div className="bg-gray-100 p-4 rounded shadow-md">
      <div className="text-center">
        <img
          className="w-36 h-36 object-cover mx-auto"
          src={data?.productImage[0]}
          alt=""
        />
        <h6 className="mt-2 text-lg font-semibold">{data?.productName}</h6>
        <div>
          <p className="font-bold text-xl">
            {displayINRCurrency(data.sellingPrice)}
          </p>
          <div className="text-end">
            <i
              className="fas fa-pen bg-green-500 p-2 rounded-full text-white cursor-pointer"
              onClick={() => setEditProduct(true)}
            ></i>
          </div>
        </div>
      </div>

      {editProduct && (
        <AdminEditProduct
          productData={data}
          onClose={() => setEditProduct(false)}
          fetchdata={fetchdata}
        />
      )}
    </div>
  );
};

export default AdminProductCard;
