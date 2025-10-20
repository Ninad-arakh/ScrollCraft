import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

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
    <div className="w-full h-full md:flex justify-evenly items-center overflow-x-hidden relative">
      <div
        ref={leftDivRef}
        className="w-5/12  h-[70vh] mt-30 px-10 flex flex-col justify-around relative "
      >
        <div className="w-full flex flex-col gap-3">
          <h1 className="text-6xl font-[cizel] uppercase font-semibold text-white">
            ScrollCraft
          </h1>
          <h2 className="text-3xl font-[chizel]  text-[#d4d4d4]">
            Where every scroll ignites a new universe
          </h2>
        </div>

        <div>
          <h2 className="text-2xl font-[chizel]  text-[#d4d4d4] leading-tight">
            Experience a realm where anime energy meets interactive design —
            powered by GSAP, Rive, and imagination.
          </h2>
        </div>
        <span className="w-full h-full bg-gray-800/50 absolute -z-10 top-0 left-0 blur-lg rounded-xl opacity-70 "></span>
      </div>

      <div ref={rightDivRef} className="w-5/12 h-[70vh] mt-30 relative px-10 ">
        <p className="absolute top-1/2 -translate-y-1/2 text-2xl text-right px-10 font-[bebas] text-[#d4d4d4]">
          “Power is not will. It is the phenomenon of physically making things
          happen.” — Madara Uchiha
        </p>
        <span className="w-full h-full bg-gray-800/50 absolute -z-10 top-0 left-0 blur-lg rounded-xl opacity-70"></span>
      </div>

      <h6 className="absolute bottom-5 right-10 font-[cizel] text-neutral-300 text-sm animate-pulse">
        Begin Scroll
      </h6>
    </div>
  );
};

export default HeroForeground;
