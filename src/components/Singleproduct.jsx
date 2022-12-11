import React from "react";
import "./singleproduct.css";
import { useCartContext } from "../cart_context";
const Singleproduct = () => {
  const { cart } = useCartContext();
  console.log(cart);
  return (
    <>
      {cart.map((cur) => {
        return (
          <>
            <div className="modal__body">
              <div className="singleProduct__container">
                <img className="singleProduct__image" src={cur.image} alt="" />
                <div className="singleProduct__details">
                  <span className="singleProduct__title">{cur.itemname}</span>
                  <span className="singleProduct__description">
                    {cur.description}
                  </span>
                  <span className="singleProduct__finalprice">
                    Rs.{cur.finalprice}
                  </span>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Singleproduct;
