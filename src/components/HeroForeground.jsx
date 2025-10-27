import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";

const HeroForeground = () => {
  const leftDivRef = useRef(null);
  const rightDivRef = useRef(null);
 

  // animating both divs using gsap
  useGSAP(() => {
    gsap.from(leftDivRef.current, {
      x: -200,
      opacity: 0,
      duration: 1,
      delay: 0.7,
      ease: "power2.out",
    });
    gsap.from(rightDivRef.current, {
      x: 200,
      opacity: 0,
      duration: 1,
      delay: 0.7,
      ease: "power2.out",
    });
  }, []);

  return (
    <div className="w-full  mt-20 sm:mt-0 sm:h-full h-9/12 sm:flex sm:justify-between sm:px-8 items-center overflow-x-hidden relative">
      <div
        ref={leftDivRef}
        className="sm:w-5/12  sm:h-[70vh]  sm:px-10 px-3 flex flex-col justify-around relative "
      >
        <div className="w-full flex flex-col gap-3">
          <h1 className=" text-5xl sm:text-7xl font-[oxanium] uppercase font-extrabold text-white">
            ScrollCraft
          </h1>
          <h2 className="sm:text-3xl text-xl -mt-3 sm:mt-0 sm:text-center font-[chizel]  text-[#d4d4d4]">
            Where every scroll ignites a new universe
          </h2>
        </div>

        <div>
          <h2 className="sm:text-3xl text-xl mt-5 font-[chizel]  text-[#d4d4d4] leading-tight">
            Experience a realm where anime energy meets interactive design —
            powered by GSAP, Rive, and imagination.
          </h2>
        </div>
        <span className="w-full h-full bg-gray-800/50 absolute -z-10 top-0 left-0 blur-lg rounded-xl opacity-70 "></span>
      </div>

      <div ref={rightDivRef} className="sm:w-5/12  h-6/12  sm:h-[70vh]  relative px-10 ">
        <p className="absolute sm:top-3/4 bottom-8  text-[#d4d4d4]  sm:text-3xl text-2xl text-right sm:px-10 px-3 font-[bebas] ">
          “Power is not will. It is the phenomenon of physically making things
          happen.” — Madara Uchiha
        </p>
        <span className="w-full h-full bg-gray-800/50 absolute -z-10 top-0 left-0 blur-lg rounded-xl opacity-70"></span>
      </div>

      <h6 className="absolute bottom-5 right-10 font-[cizel] text-neutral-300  text-sm animate-pulse">
        Begin Scroll
      </h6>
    </div>
  );
};

export default HeroForeground;
