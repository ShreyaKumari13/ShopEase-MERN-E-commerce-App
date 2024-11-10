import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-lg font-bold">
          E-Commerce
        </Link>
        <Link to="/cart" className="text-lg font-bold">
          View Cart
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
