import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Context from "../../context";
import SummaryApi from "../../common/SummaryApi";
import displayINRCurrency from "../../helper/displayCurrency";


const Cart = ({ show, toggleOffcanvas }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const context = useContext(Context);

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch(SummaryApi.addtoCart.url, {
      method: SummaryApi.addtoCart.method,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
    });
    const responseData = await response.json();
    setLoading(false);

    if (responseData.success) {
      setData(responseData.data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addToCart = async (productId) => {
    const response = await fetch(SummaryApi.addtoCart.url, {
      method: "POST",
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ productId }),
    });

    const responseData = await response.json();
    if (responseData.success) {
      fetchData(); // refresh the cart
      context.fetchUserAddToCart(); // Update context if needed
    }
  };

  // Additional code for handling quantities, deletion, etc. can remain unchanged
  const totalQty = data.reduce((prev, curr) => prev + curr.quantity, 0);
  const totalPrice = data.reduce(
    (prev, curr) => prev + curr.quantity * curr?.productId?.sellingPrice,
    0
  );

  return (
    <div
      className={`offcanvas offcanvas-end ${show ? "show" : ""}`}
      tabIndex="-1"
      style={{ visibility: show ? "visible" : "hidden" }}
    >
      <div className="offcanvas-header">
        <h6 className="offcanvas-title">Shopping Cart</h6>
        <button
          type="button"
          className="btn-close"
          onClick={toggleOffcanvas}
        />
      </div>
      <div className="offcanvas-body">
        {loading ? (
          <p>Loading...</p>
        ) : data.length > 0 ? (
          <div>
            <div className="cart-items">
              {data.map((item) => (
                <div key={item._id} className="cart-item">
                  <img src={item.productId?.imageUrl} alt={item.productId?.name} />
                  <div className="item-details">
                    <h5>{item.productId?.name}</h5>
                    <p>Price: {displayINRCurrency(item.productId?.sellingPrice)}</p>
                    <p>Quantity: {item.quantity}</p>
                    <button onClick={() => addToCart(item.productId?._id)}>Add more</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="total">
              <h5>Total Items: {totalQty}</h5>
              <h5>Total Price: {displayINRCurrency(totalPrice)}</h5>
            </div>
          </div>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
