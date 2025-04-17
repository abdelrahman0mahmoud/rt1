import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav className="bg-gray-800 text-white flex justify-around items-center p-5">
        <div className="logo text-3xl font-bold">
          <Link to="/home">START PORTFOLIO</Link>
        </div>
        <div className="flex gap-3">
          <Link to="/about">About</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
    </>
  );
}
