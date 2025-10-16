import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const HeroForeground = () => {
    const leftDivRef = useRef(null)
    const rightDivRef = useRef(null)

    // animating both divs using gsap
    useGSAP(()=>{
        gsap.from(leftDivRef.current, {
            x: -200,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        })
        gsap.from(rightDivRef.current, {
            x: 200,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        })
    },[])

  return (
    <div className="w-full h-full flex justify-evenly items-center overflow-x-hidden relative">
      <div ref={leftDivRef} className="w-5/12 h-[80vh] mt-18 px- flex flex-col justify-around relative">
        <div className="w-full flex flex-col gap-3">
          <h1 className="text-5xl font-[cizel] uppercase font-semibold text-white">
            ScrollCraft
          </h1>
          <h2 className="text-2xl font-[chizel]  text-[#d4d4d4]">
            Where every scroll ignites a new universe
          </h2>
        </div>

        <div>
          <h2 className="text-xl font-[chizel]  text-[#d4d4d4] leading-tight">
            Experience a realm where anime energy meets interactive design —
            powered by GSAP, Rive, and imagination.
          </h2>
        </div>
      </div>

      <div ref={rightDivRef} className="w-5/12 h-[80vh] mt-18 relative ">
        <p className="absolute top-1/2 -translate-y-1/2 text-xl text-right px-10 font-[bebas] text-[#d4d4d4]">
          “Power is not will. It is the phenomenon of physically making things
          happen.” — Madara Uchiha
        </p>
      </div>
      <h6 className="absolute bottom-20 right-10 font-[cizel] text-neutral-300 text-sm">Begin Scroll</h6>
    </div>
  );
};

export default HeroForeground;
