import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo/ScrollCraftpng.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

 
const Navbar = () => {

  useGSAP(() =>{
    gsap.from(".logo", {
      opacity:0,
      duration:1,
      yoyo:true,
      repeat: -1,
      ease: "none"
    })
  })

  return (
    <div  className="flex justify-between relative w-3/4 border-[0.5px] border-neutral-600/50 bg-gradient-to-r from-neutral-900/0 via-white/50 to-neutral-900/0  shadow-md py-3 px-5 items-center rounded-full backdrop-blur-[5px] overflow-hidden">
      <div className="w-10 h-10 flex items-center relative">
        <img src={Logo} alt="Logo" className="hover:scale-150 transition-all duration-200 cursor-pointer" />
        <span className="logo absolute top-0 left-0 bg-purple-300 -z-10 rounded-full blur-md opacity-70 w-[110%] h-[110%] "></span>
      </div>

      <div className="flex gap-2 md:gap-4">
        <Link className="font-xl font-medium font-[oxanium] hover:scale-125 transition-all duration-150" to="/">
          Home
        </Link>
        <Link className="font-xl font-medium font-[oxanium] hover:scale-125 transition-all duration-150" to="/">
          Realms
        </Link>
        <Link className="font-xl font-medium font-[oxanium] hover:scale-125 transition-all duration-150" to="/">
          Gallery
        </Link>
        <Link className="font-xl font-medium font-[oxanium] hover:scale-125 transition-all duration-150" to="/">
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
