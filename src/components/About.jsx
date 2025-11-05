import React, { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FireParticles from "../common/Particles";
import Lenis from "lenis";
import react from "../assets/images/react icon.png"
import tailwind from "../assets/images/Tailwind CSS.png"
import gsapPic from "../assets/images/gsap.png"
import vite from "../assets/images/vite.png"

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const leftDivRef = useRef(null);
  const rightDivRef = useRef(null);
  const bottomDivRef = useRef(null);
  const pageRef = useRef(null);
  const page2Ref = useRef(null);
  const headerRef = useRef(null);
  const subTextRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Fade-in intro text
    tl.from(headerRef.current, {
      opacity: 0,
      delay: 0.5,
      duration: 2,
      ease: "power2.out",
    }).from(
      subTextRef.current,
      {
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
      },
      "<+=1"
    );

    // Combined scroll-based timeline
    const revealTl = gsap.timeline({
      scrollTrigger: {
        trigger: pageRef.current,
        start: "top top",
        end: "bottom+=100% top",
        scrub: 1.5,
        pin: true,
        anticipatePin: 1,
        // markers: true,
      },
    });

    revealTl
      .to(leftDivRef.current, {
        xPercent: -102,
        ease: "power2.inOut",
      })
      .to(
        rightDivRef.current,
        {
          xPercent: 102,
          ease: "power2.inOut",
        },
        "<"
      );
    revealTl.to(
      ".left",
      {
        xPercent: 60, // move toward center from left side
        ease: "power2.inOut",
      },
      "<" // sync
    );
    revealTl.to(
      ".right",
      {
        xPercent: -60, // move toward center from right side
        ease: "power2.inOut",
      },
      "<"
    );

    // Optional depth scale on background content
    revealTl.to(
      bottomDivRef.current,
      {
        scale: 1.05,
        ease: "power2.out",
      },
      "<+=0.3"
    );
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 2,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-[#1e1e1e] w-full overflow-hidden">
      {/* INTRO SECTION */}
      <div className="w-full h-screen flex flex-col gap-8 justify-center items-center">
        <h1
          ref={headerRef}
          className="text-[10vw] text-center leading-[8vw] font-[chizel] font-semibold text-red-200 uppercase"
        >
          BEHIND THE SCROLL
        </h1>
        <h6
          ref={subTextRef}
          className="text-[3vw] text-center leading-[8vw] font-[chizel] text-red-100"
        >
          A handcrafted world where animation meets interactivity.
        </h6>
        <FireParticles count={20} />
      </div>

      {/* REVEAL SECTION */}
      <div ref={pageRef} className="relative w-full h-screen overflow-hidden">
        {/* Panels */}
        <div className="absolute inset-0 flex">
          <div
            ref={leftDivRef}
            className="w-1/2 h-full bg-[#1e1e1e] flex items-center overflow-hidden"
          >
            <p className="left text-[12vw] font-[chizel] font-semibold text-red-200 ml-[45%]">
              ScrollCraft
            </p>
            <FireParticles count={20} />
          </div>
          <div
            ref={rightDivRef}
            className="w-1/2 h-full bg-[#1e1e1e] flex items-center overflow-hidden"
          >
            <p className="right text-[12vw] font-[chizel] font-semibold text-red-200 -ml-[55%]">
              ScrollCraft
            </p>
            <FireParticles count={20} />
          </div>
        </div>

        {/* Background behind sliding panels */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#18001a] via-[#550058] to-[#20001a] -z-10 flex flex-col gap-8 justify-center items-center">
            
          <div ref={bottomDivRef} className="w-full">
            <div className=" w-9/12 mx-auto">
              <h1 className="text-[3vw] leading-[8vw] font-[chizel] font-semibold text-red-100 uppercase">
                What ScrollCraft is about —{" "}
              </h1>
              <p className="text-[2vw]  font-[chizel] font-semibold text-red-100 ">
                ScrollCraft is an experimental scroll-driven experience merging
                anime-inspired art, motion, and storytelling. Built with React,
                GSAP, and Lenis for seamless cinematic flow.
              </p>
            </div>
            <div className="w-9/12 mx-auto">
              <h1 className="text-[2.5vw] leading-[8vw] font-[chizel] font-semibold text-red-100 uppercase">
                Vision -{" "}
              </h1>
              <p className="text-[2vw]  mx-auto font-[chizel] font-semibold text-red-100 ">
                It’s not just a website — it’s a story you scroll through.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-screen w-full bg-gradient-to-tr from-[#18001a] via-[#550058] to-[#20001a]">
        <div className="w-10/12 mx-auto flex flex-col gap-5">
          <h1 className="text-[3vw] text-left leading-[8vw] font-[chizel] font-semibold text-red-100 uppercase">
            About Me
          </h1>
          <p className="text-[2vw] -mt-5  mx-auto font-[chizel] font-semibold text-red-100 ">
            Hi, I’m <span className="font-bold text-[2.5vw] text-red-400"> Ninad Arakh </span> — a front-end developer passionate about turning
            visuals into motion. ScrollCraft is a cinematic web experiment where
            anime-style animation meets modern web technologies.
          </p>
          <div className=" w-full flex justify-center items-center gap-10 mt-10">
            <img src={react} alt="reactPng"  className=" w-20 hover:animate-bounce"/>
            <img src={vite} alt="VitePng"  className=" w-20 hover:animate-bounce"/>
            <img src={tailwind} alt="tailwind"  className=" w-20 hover:animate-bounce"/>
            <img src={gsapPic} alt="gsapPng"  className=" w-20 hover:animate-bounce"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
