import React from "react";
import { useState } from "react";
import "./product.css";
import Data from "../resources/data";
import { useCartContext } from "../cart_context";
import Filter from "./Filter";

const Product = () => {
  const [data, setData] = useState(Data);

  const { addtoBasket } = useCartContext();

  return (
    <>
      <Filter setData={setData} />

      {data.map((curElem) => {
        return (
          <div className="product__row">
            <div className="Product">
              <a href={`/${curElem.name}`}>
                <img
                  className="Product__image"
                  src={curElem.otherImages[0]}
                  alt=""
                />
              </a>
              <div className="Product__text">
                <div className="Product__name">
                  <span>
                    <strong>{curElem.name}</strong>
                  </span>
                </div>

                <span>{curElem.description}</span>
                <p className="Product__price">
                  <span className="Product__finalprice">
                    Rs.{curElem.finalPrice}
                  </span>
                  <span>
                    <strike>{curElem.strickPrice}</strike>
                  </span>
                  <span>{curElem.discount}% OFF</span>
                </p>
              </div>
              <div className="action">
                <button
                  onClick={() =>
                    addtoBasket(
                      curElem.name,
                      curElem.description,
                      curElem.otherImages[0],
                      curElem.finalPrice
                    )
                  }
                  className="addcartbtn"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Product;
