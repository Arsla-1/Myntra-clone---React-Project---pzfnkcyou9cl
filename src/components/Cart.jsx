import React from "react";
import { useCartContext } from "../cart_context";
import "./cart.css";

const Cart = () => {
  // console.log(cart);
  const { cart } = useCartContext();
  console.log(cart);

  return (
    <>
      {cart.map((cur) => {
        return (
          <div>
            <h1>hello</h1>
            <img src={cur.image} alt="" />
            <p>{cur.itemname}</p>
            <p>{cur.description}</p>
          </div>
        );
      })}
      ;
    </>
  );
};

export default Cart;
