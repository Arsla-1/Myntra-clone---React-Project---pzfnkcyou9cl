import React, { createContext, useContext, useReducer } from "react";
import Data from "./resources/data";
import cartReducer from "../src/cartReducer";

const CartContext = createContext();

const initialState = {
  cart: [],
  total_item: "",
  total_amount: "",
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const addtoBasket = (itemname, description, image, finalprice) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { itemname, description, image, finalprice },
    });
  };
  return (
    <CartContext.Provider value={{ ...state, addtoBasket }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
