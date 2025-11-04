import React from "react";
import { Link } from "react-router-dom";
import FightScene from "../common/FightScene";
import RealmPanel from './RealmPanel'

const Scrollinitiation = () => {
  return (
    <div className="bg-[#1e1e1e] w-full">
      <div className="absolute top-0 left-0">
        <RealmPanel />
      </div>

      <div className="w-full  z-0">
        <FightScene path="ds" maxFrames="0868" />
      </div>

      {/*  button */}
      <div className=" bottom-10  animate-pulse  w-full flex justify-center ">
        <Link
          to={"/scrollGallery"}
          className="relative inline-block text-lg group cursor-pointer"
        >
          <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-60 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span className="relative animate-none">Scroll Gallery</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </Link>
      </div>
    </div>
  );
};

export default Scrollinitiation;
