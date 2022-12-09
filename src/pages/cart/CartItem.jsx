import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import "./cartItem.css";

function CartItem({ data: { id, productName, price, productImg } }) {
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);
  const result = price * cartItems[id];

  return (
    <div className="cart-item">
      <img src={productImg} alt={productName} />
      <div className="description">
        <p>{productName}</p>
        <p> $ {price}</p>
        <div className="handler">
          <button onClick={() => removeFromCart(id)}>-</button>
          <button onClick={() => addToCart(id)}>+</button>
        </div>
        <p>
          {cartItems[id]} Items, Total: ${result}
        </p>
      </div>
    </div>
  );
}

export default CartItem;
