import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo/ScrollCraftpng.png";


const Navbar = () => {

  return (
    <div  className="flex justify-between w-3/4 border-[0.5px] border-neutral-600/50 bg-gradient-to-r from-neutral-900/0 via-white/35 to-neutral-900/0  shadow-md py-3 px-5 items-center rounded-full backdrop-blur-xs ">
      <div className="w-10 h-10 flex items-center">
        <img src={Logo} alt="Logo" />
      </div>

      <div className="flex gap-2 md:gap-4">
        <Link className="font-xl font-medium font-[oxanium]" to="/">
          Home
        </Link>
        <Link className="font-xl font-medium font-[oxanium]" to="/">
          Realms
        </Link>
        <Link className="font-xl font-medium font-[oxanium]" to="/">
          Gallery
        </Link>
        <Link className="font-xl font-medium font-[oxanium]" to="/">
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
