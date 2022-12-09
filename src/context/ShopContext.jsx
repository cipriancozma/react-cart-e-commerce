import React, { createContext, useState } from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};

  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }

  return cart;
};

function ShopContextProvider({ children }) {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prevState) => ({
      ...prevState,
      [itemId]: prevState[itemId] + 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevState) => ({
      ...prevState,
      [itemId]: prevState[itemId] - 1,
    }));
  };

  const getTotalAmount = () => {
    let total = 0;

    for (let item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        total += cartItems[item] * itemInfo.price;
      }
    }
    return total;
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    getTotalAmount,
  };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
}

export default ShopContextProvider;
