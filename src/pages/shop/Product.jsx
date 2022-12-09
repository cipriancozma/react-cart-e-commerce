import React from "react";

function Product({ item: { productImg, productName, price } }) {
  return (
    <div className="product">
      <img src={productImg} alt={productName} />
      <div className="description">
        <p>{productName}</p>
        <p>${price}</p>
      </div>
      <button className="addToCartBtn">Add to Cart</button>
    </div>
  );
}

export default Product;
