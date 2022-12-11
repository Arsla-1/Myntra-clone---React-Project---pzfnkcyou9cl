import React from "react";
import "./filter.css";
import { Link } from "react-router-dom";
import data from "../resources/data";

const Filter = ({ setData }) => {
  const filterGender = (gender) => {
    const updatedList = data.filter((cur) => {
      return cur.gender === gender;
    });

    setData(updatedList);
  };

  const filterFolded = (folded) => {
    const updatedList = data.filter((cur) => {
      return cur.folded === folded;
    });

    setData(updatedList);
  };
  return (
    <div className="Filter__container">
      <div className="Filter__gender">
        <h4>Gender:-</h4>
        <Link onClick={() => filterGender("M")}>MEN</Link>

        <br />
        <br />
        <Link onClick={() => filterGender("F")}>WOMEN</Link>
      </div>
      <div className="Fiter__categories">
        <h4>Categories:-</h4>
        <Link onClick={() => filterFolded("Y")}>Sleeves Folded</Link>
      </div>
    </div>
  );
};

export default Filter;
