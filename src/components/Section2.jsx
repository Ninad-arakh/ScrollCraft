import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Lenis from "lenis";
import Particles from "../common/Particles";

gsap.registerPlugin(ScrollTrigger);

const Section2 = () => {
  const sectionRef = useRef(null);
  const particlesRef = useRef(null);

  let isMob;
  const screen = window.screen.width;
  if (screen <= 486) isMob = true;

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: !isMob ? "center 20%" : "30% 80%",
        scrub: 3,
        end: !isMob ? "bottom 33%" : "top -2%",
        // markers: true,
        // ease:"power3.out"
      },
    });

    // background color change
    tl.to(
      sectionRef.current,
      {
        backgroundColor: "#1e1e1e",
        ease: "power1.out",
      }
      // sync timing with previous animation
    );

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
      particlesRef.current,
      {
        x: 100 + "vw",
        opacity: 0.3,
      },
      {
        delay: 0.6,
        duration:0.4,
        x: 0 + "vw",
        opacity: 100,
        ease: "bounce.out",
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
        duration: 2,
        opacity: 1,
        color: "white",
        ease: "power4.out",
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative sm:w-full w-screen h-[100vh]  flex flex-col items-center justify-center text-center  overflow-hidden transition-colors duration-800"
    >
      <div className="w-full h-full absolute" ref={particlesRef}>
        <Particles count={100} />
      </div>

      <h2 className="sm:text-7xl text-2xl font-bold mb-10  font-[orbitron]">
        The Awakening Realm
      </h2>
      <p className="max-w-2xl font-[oxanium] font-semibold sm:text-[35px] text-2xl sm:leading-relaxed leading-tight">
        The scroll begins to unfold...
      </p>
      <p className="max-w-2xl font-[oxanium] font-semibold sm:text-[35px] text-2xl sm:leading-relaxed leading-tight">
        Whispers of forgotten worlds awaken.
      </p>
      <p className="max-w-2xl font-[oxanium] font-semibold sm:text-[35px] text-2xl sm:leading-relaxed leading-tight">
        Each line of code breathes new life.
      </p>
      <p className="max-w-2xl font-[oxanium] font-semibold sm:text-[35px] text-2xl sm:leading-relaxed leading-tight">
        You are not just a viewer...
      </p>
      <p className="max-w-2xl font-[oxanium] font-semibold sm:text-[35px] text-2xl sm:leading-relaxed leading-tight">
        You are the crafter of this universe.
      </p>

      <div className="absolute bottom-10  animate-pulse ">
        <Link
          to={"/experience"}
          className="relative inline-block text-lg group cursor-pointer"
        >
          <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-60 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span className="relative animate-none">Enter the next realm</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </Link>
      </div>
    </section>
  );
};

export default Section2;
