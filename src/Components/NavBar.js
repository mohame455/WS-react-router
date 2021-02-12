import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <ul className="nav">
        <li>
          {" "}
          <Link to="/home">Home</Link>{" "}
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/admin">Admin area</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
