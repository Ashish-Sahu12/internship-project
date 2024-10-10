import React from "react";
import logo from "../../public/logo.png";
import logos from "../../public/logos.webp";
import { Link } from "react-router-dom";

function Header() {
  return (
  
    <nav className="h-20 flex sticky top-0 justify-between items-center px-4">
      <div>
        <Link to="/">
          <img src={logos} className="w-[200px] ml-4" alt="Logo" />
        </Link>
      </div>

      <div className="flex flex-wrap justify-between gap-4 items-center">
        <Link className="text-white hover:text-[#C5D5D8]"> Dashboard </Link>
        <Link to= "/feature"  className="text-white hover:text-[#C5D5D8]"> Features </Link>
        <Link className="text-white hover:text-[#C5D5D8]"> Price </Link>

        <Link to ="/login" >
          <button className="text-white text-center hover:bg-[#18C375] bg-[#48276C] px-4 py-2 rounded-3xl border-0 text-xl font-semibold">
            Login
          </button>
        </Link>
      </div>
    </nav>

  );
}

export default Header;
