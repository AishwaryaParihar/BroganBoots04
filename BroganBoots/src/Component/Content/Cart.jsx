import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Context from "../../context";
import displayINRCurrency from "../../helper/displayCurrency";
import SummaryApi from "../../common/SummaryApi";

const Cart = ({ show, toggleOffcanvas, context }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cod"); // default to cash on delivery
  const context2 = useContext(Context);
  const loadingCart = new Array(4).fill(null);

  const fetchData = async () => {
    const response = await fetch(SummaryApi.addToCartProductView.url, {
      method: SummaryApi.addToCartProductView.method,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
    });

    const responseData = await response.json();

    if (responseData.success) {
      setData(responseData.data);
    }
  };

  const handleLoading = async () => {
    await fetchData();
  };

  useEffect(() => {
    setLoading(true);
    handleLoading();
    setLoading(false);
  }, []);

  const updateCart = async (id, qty) => {
    const response = await fetch(SummaryApi.updateCartProduct.url, {
      method: SummaryApi.updateCartProduct.method,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ _id: id, quantity: qty }),
    });

    const responseData = await response.json();

    if (responseData.success) {
      fetchData();
    }
  };

  const deleteCartProduct = async (id) => {
    const response = await fetch(SummaryApi.deleteCartProduct.url, {
      method: SummaryApi.deleteCartProduct.method,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ _id: id }),
    });

    const responseData = await response.json();

    if (responseData.success) {
      fetchData();
      context2.fetchUserAddToCart();
    }
  };

  const totalQty = data.reduce(
    (prev, curr) => prev + curr.quantity,
    0
  );
  const totalPrice = data.reduce(
    (prev, curr) => prev + curr.quantity * curr?.productId?.sellingPrice,
    0
  );

  return (
    <div className={`bg-white shadow-lg transform transition-transform grid grid-cols-1 md:grid-cols-2 gap-4 p-4`}>
       {/* Left Side - Cart Items */}
       <div className="cart-items">
        <div className="p-4 flex justify-between items-center">
          
        </div>

        <div className="px-4">
          <p className="text-sm">Cart Product Count: {context?.cartProductCount}</p>

          <div className="mt-4">
            {loading
              ? loadingCart.map((_, index) => (
                  <div key={`loading-${index}`} className="py-2">Loading...</div>
                ))
              : data.map((product) => (
                  <div
                    className="flex items-center justify-between py-2 border-b"
                    key={product?._id}
                  >
                    <img
                      className="w-16 h-16 object-cover"
                      src={product?.productId?.productImage[0]}
                      alt={product?.productId?.productName}
                    />
                    <div className="flex-grow ml-4">
                      <div className="flex justify-between">
                        <div>{product?.productId?.productName}</div>
                        <div
                          className="text-red-600 cursor-pointer"
                          onClick={() => deleteCartProduct(product?._id)}
                        >
                          🗑️
                        </div>
                      </div>
                      <div className="text-sm text-gray-500">Size: {product?.size}</div>
                      <div className="text-sm text-gray-500">
                        Category: {product?.productId?.category}
                      </div>
                      <div className="flex justify-between mt-3">
                        <div className="flex items-center">
                          <button
                            className="px-2 py-1 bg-gray-200 rounded-l"
                            onClick={() => updateCart(product?._id, product?.quantity - 1)}
                          >
                            -
                          </button>
                          <span className="px-3">{product?.quantity}</span>
                          <button
                            className="px-2 py-1 bg-gray-200 rounded-r"
                            onClick={() => updateCart(product?._id, product?.quantity + 1)}
                          >
                            +
                          </button>
                        </div>
                        <div className="text-right">
                          {displayINRCurrency(product?.productId?.sellingPrice)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
          </div>

          {/* Order Summary */}
          <div className="mt-6 border-t pt-4">
            <h3 className="font-bold">Order Summary</h3>
            <div className="flex justify-between mt-2">
              <span>Total Items:</span>
              <span>{totalQty}</span>
            </div>
            <div className="flex justify-between mt-2">
              <span>Total Price:</span>
              <span>{displayINRCurrency(totalPrice)}</span>
            </div>
          </div>

          {/* Checkout Button */}
          {/* <div className="mt-6">
            {loading ? (
              <div>Loading total...</div>
            ) : (
              <div className="text-center">
                <Link
                  to="/payment"
                  className="block py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  CHECKOUT - {displayINRCurrency(totalPrice)}
                </Link>
              </div>
            )}
          </div> */}
        </div>
      </div>
      {/* Right Side - Order Form */}
      <div className="order-form p-6 bg-gray-100">
        <h2 className="text-lg font-bold mb-4">Place Your Order</h2>
        <form className="space-y-4">
          {/* Input Fields */}
          {["Full Name", "Phone Number", "Email", "Pin Code", "State", "City", "Landmark", "House/Flat Number"].map((label, index) => (
            <div key={index}>
              <label className="block text-sm font-medium text-gray-700">{label}</label>
              <input
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 rounded"
                placeholder={`Enter your ${label.toLowerCase()}`}
                required
              />
            </div>
          ))}
          <div>
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <textarea
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your address"
              required
            ></textarea>
          </div>

          {/* Payment Method Selection */}
          <div className="flex items-center mt-4">
            <input
              type="radio"
              id="cod"
              name="paymentMethod"
              value="cod"
              checked={paymentMethod === "cod"}
              onChange={() => setPaymentMethod("cod")}
            />
            <label htmlFor="cod" className="ml-2">Cash on Delivery</label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="online"
              name="paymentMethod"
              value="online"
              checked={paymentMethod === "online"}
              onChange={() => setPaymentMethod("online")}
            />
            <label htmlFor="online" className="ml-2">Online Payment</label>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-indigo-600 text-white rounded hover:bg-indigo-700"
            >
              Place Order
            </button>
          </div>
        </form>
      </div>

     
    </div>
  );
};

export default Cart;
