import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

function Product({ item: { id, productImg, productName, price } }) {
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];

  return (
    <div className="product">
      <img src={productImg} alt={productName} />
      <div className="description">
        <p>{productName}</p>
        <p>${price}</p>
      </div>
      <button className="addToCartBtn" onClick={() => addToCart(id)}>
        Add to Cart {cartItemAmount > 0 && <span> - ({cartItemAmount})</span>}
      </button>
    </div>
  );
}

export default Product;
