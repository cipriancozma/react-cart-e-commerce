import React, { useEffect } from "react";
import { PRODUCTS } from "../../products";
import Product from "./Product";
import "./shop.css";

function Shop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="shop">
      <div className="shop-title">
        <h1>Ciprian's Shop</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((item) => {
          return <Product key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}

export default Shop;
