import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const Section2 = () => {
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const lenis = new Lenis({
  //     duration: 1,
  //   });
  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }
  //   requestAnimationFrame(raf);

  //   return () => {
  //     lenis.destroy();
  //   };
  // }, []);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top -60%",
        scrub: 3,
        end: "bottom 300%",
        // markers: true,
      },
    });
    tl.fromTo(
      sectionRef.current.querySelectorAll("h2"),
      {
        ease: "power4.out",
        x: 300,
        opacity: 0,
        color: "black",
      },
      {
        x: 0,
        opacity: 1,
        color: "white",
        ease: "power4.out",
      }
    );
    tl.fromTo(
      sectionRef.current.querySelectorAll("p"),
      {
        ease: "power2.out",
        x: 300,
        opacity: 0,
        color: "black",
      },
      {
        x: 0,
        stagger: 1.5,
        duration:2,
        opacity: 1,
        color: "white",
        ease: "power4.out",
      }
    );
    // background color change
    tl.to(
      sectionRef.current,
      {
        backgroundColor: "#303030",
        ease: "power1.out",
      },
      "<" // sync timing with previous animation
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[100vh] flex flex-col items-center justify-center text-center overflow-hidden transition-colors duration-1000"
    >
      <h2 className="text-7xl font-bold mb-10 font-[orbitron]">
        The Awakening Realm
      </h2>
      <p className="max-w-2xl font-[oxanium] font-semibold text-[35px] leading-relaxed">
        The scroll begins to unfold...
      </p>
      <p className="max-w-2xl font-[oxanium] font-semibold text-[35px] leading-relaxed">
        Whispers of forgotten worlds awaken.
      </p>
      <p className="max-w-2xl font-[oxanium] font-semibold text-[35px] leading-relaxed">
        Each line of code breathes new life.
      </p>
      <p className="max-w-2xl font-[oxanium] font-semibold text-[35px] leading-relaxed">
        You are not just a viewer...
      </p>
      <p className="max-w-2xl font-[oxanium] font-semibold text-[35px] leading-relaxed">
        You are the crafter of this universe.
      </p>

      <div className="absolute bottom-10  animate-pulse ">
        <Link to={"/universeScroll"} className="relative inline-block text-lg group cursor-pointer">
          <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-60 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span className="relative animate-none">Enter the next realm</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            dataRounded="rounded-lg"
          ></span>
        </Link>
      </div>
    </section>
  );
};

export default Section2;
