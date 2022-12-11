import React from "react";
import "./nav.css";
import icon from "../resources/icon.jpeg";
import carticon from "../resources/shopping-cart-solid.svg";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import { useState } from "react";
import { useCartContext } from "../cart_context";

const Nav = () => {
  const [openmodal, setOpenModal] = useState(false);
  const { cart } = useCartContext();

  return (
    <>
      <nav className="header">
        {/* logo on the left */}
        {/* links to different pages */}
        {/* A search box */}
        {/* profile wishlist and bag on the right */}
        <div className="icon-holder">
          <img className="header__logo" src={icon} alt="Myntra_logo" />
        </div>
        <div className="links">
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Kids</a>
          <a href="#">Home & Living</a>
          <a href="#">Beauty</a>
          <a href="#">Studio</a>
        </div>

        <div className="header__searchbox">
          <input
            type="text"
            placeholder="Search for products, brands and more"
          />
        </div>

        <div className="cart-holder">
          <button>
            <img
              onClick={() => {
                setOpenModal(true);
              }}
              className="header_cart"
              src={carticon}
              alt=""
            />

            <span>{cart.length}</span>
          </button>
        </div>
      </nav>
      {openmodal && <Modal setOpenModal={setOpenModal} />}
    </>
  );
};

export default Nav;
