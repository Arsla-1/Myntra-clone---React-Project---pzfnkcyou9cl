import React from "react";
import "./modal.css";
import { useCartContext } from "../cart_context";
import Singleproduct from "./Singleproduct";

const Modal = ({ setOpenModal }) => {
  const { cart } = useCartContext();
  var sum = 0;
  return (
    <>
      <div className="modal">
        <button
          onClick={() => {
            setOpenModal(false);
          }}
          class="close-modal"
        >
          &times;
        </button>
        <h1 className="modal__title">Welcome to the Cart!</h1>
        <div className="box">
          <div>
            <Singleproduct />
          </div>
          <div className="orderSummary">
            <h1>Order Summary</h1>
            <hr />
            {cart.map((cur) => {
              {
                sum = sum + Number(cur.finalprice);
              }
              return (
                <>
                  <div className="orderdetail">
                    <span className="order__title">{cur.itemname}</span>
                    <span className="order__finalprice">
                      Rs.{cur.finalprice}
                    </span>
                  </div>
                </>
              );
            })}
            <div className="Total">
              <hr />
              <span>
                <strong>Total Amount</strong>: Rs.{sum}
              </span>
            </div>
            <div className="checkoutbtn__container">
              <button className="checkoutbtn">Checkout</button>
            </div>
          </div>
        </div>
      </div>
      <div class="overlay"></div>
    </>
  );
};

export default Modal;
