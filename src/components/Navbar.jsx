import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo/ScrollCraftpng.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import useIsMobile from "../common/useIsMobile";

const Navbar = () => {
  const isMob = useIsMobile();

  useGSAP(() => {
    gsap.from(".logo", {
      opacity: 0,
      duration: 1,
      yoyo: true,
      repeat: -1,
      ease: "none",
    });
  }, []);

  return (
    <div className={`flex justify-between relative w-3/4 border-[0.5px] border-neutral-600/50 bg-gradient-to-r from-neutral-900/0 via-white/50 to-neutral-900/0  shadow-md sm:py-3 sm:px-5 py-1 px-2 items-center rounded-full backdrop-blur-[5px] overflow-hidden`}>
      <div className="w-10 h-10 flex items-center relative">
        <img
          src={Logo}
          alt="Logo"
          className="hover:scale-150 transition-all duration-200 cursor-pointer"
        />
        <span className="logo absolute top-0 left-0 bg-purple-300/60 -z-10 rounded-full blur-md opacity-70 w-[110%] h-[110%] "></span>
      </div>

      {!isMob ? (
        <div className="flex gap-2 md:gap-4">
          <Link
            className="font-xl font-medium font-[oxanium] hover:scale-125 transition-all duration-150"
            to="/"
          >
            Home
          </Link>
          <Link
            className="font-xl font-medium font-[oxanium] hover:scale-125 transition-all duration-150"
            to="/experience"
          >
            Realm
          </Link>
          <Link
            className="font-xl font-medium font-[oxanium] hover:scale-125 transition-all duration-150"
            to="/about"
          >
            About
          </Link>
          <Link
            className="font-xl font-medium font-[oxanium] hover:scale-125 transition-all duration-150"
            to="/contactme"
          >
            Contact Me
          </Link>
        </div>
      ) : (
        <div className="size-8 flex items-center justify-center">
          <svg onClick={() => console.log("clicked...")} className="ri-menu-line w-7 text-amber-50 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg>
        </div>
      )}
    </div>
  );
};

export default Navbar;
