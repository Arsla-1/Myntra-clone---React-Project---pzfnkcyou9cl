import React from "react";
import "./app.css";
import Nav from "./components/Nav";
import Product from "./components/Product";
import Filter from "./components/Filter";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import { useState } from "react";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Nav />
                <div className="container">
                  {/* <div className="filter">
                    <Filter />
                  </div> */}
                  <div className="product__row">
                    <Product />
                  </div>
                </div>
              </>
            }
          />
        </Routes>
        <div cart__container>
          
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
