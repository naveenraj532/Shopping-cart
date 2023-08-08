// Shop-context.js
import React, { createContext, useState } from "react";
import { PRODUCTS } from "../Products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};

  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }

  return cart; // Add the return statement to return the cart object
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addTocart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromcart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {

    setCartItems((prev) => ({...prev, [itemId]: newAmount}))
  }
  
  const getTotal = () => {

      let totalAmount = 0;
      for(const item in cartItems){
        if(cartItems[item] > 0){
          let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
          totalAmount += cartItems[item] * itemInfo.price;
        }
      }
      return totalAmount;
    }

  const contextValue = { cartItems, addTocart, removeFromcart, updateCartItemCount, getTotal };

  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  );
};
