import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import { PRODUCTS } from "../../products";
import CartItem from "./CartItem";
import "./cartItem.css";

function Cart() {
  const { cartItems, getTotalAmount } = useContext(ShopContext);

  const navigate = useNavigate();
  let totalAmount = getTotalAmount();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>

      <div className="cartItems">
        {PRODUCTS.map((product) => {
          return (
            cartItems[product.id] > 0 && (
              <CartItem key={product.id} data={product} />
            )
          );
        })}
      </div>

      {totalAmount > 0 ? (
        <>
          <div>Total of all items: ${totalAmount}</div>
          <div className="handler">
            <button onClick={() => navigate("/")}>Continue Shopping</button>
            <button>Checkout</button>
          </div>
        </>
      ) : (
        <p>Your Cart is Empty</p>
      )}
    </div>
  );
}

export default Cart;
