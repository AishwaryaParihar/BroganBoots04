import React, { useState } from "react";
import { MdOutlineEdit } from "react-icons/md"; // Importing the MdOutlineEdit icon
import AdminEditProduct from "./AdminEditProduct";
import displayINRCurrency from "../../helper/displayINRCurrency";
import { AiTwotoneDelete } from "react-icons/ai";
import SummaryApi from "../../common/index"; // Import your API routes
import { toast } from "react-toastify"; // For showing notifications

const AdminProductCard = ({ data, fetchdata }) => {
  const [editProduct, setEditProduct] = useState(false);

  // Function to handle product deletion
  const handleDeleteProduct = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (!confirmDelete) return;

    try {
      const response = await fetch(`${SummaryApi.deleteProduct.url}/${data._id}`, {
        method: SummaryApi.deleteProduct.method,
        credentials: "include",
        headers: {
          "content-type": "application/json",
        },
      });
      
      const responseData = await response.json();
      if (responseData.success) {
        toast.success(responseData?.message);
        fetchdata(); // Refresh the product list after deletion
      } else {
        toast.error(responseData?.message);
      }
    } catch (error) {
      toast.error("Failed to delete the product. Please try again.");
    }
  };

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
          <div className="flex justify-between">
            <MdOutlineEdit
              className="text-green-600 p-1 rounded-full shadow shadow-lime-600 cursor-pointer"
              onClick={() => setEditProduct(true)}
              size={28} // You can adjust the size as needed
            />
            <AiTwotoneDelete
              className="text-red-600 p-1 rounded-full shadow shadow-red-600 cursor-pointer"
              onClick={handleDeleteProduct} // Trigger delete on click
              size={28}
            />
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
