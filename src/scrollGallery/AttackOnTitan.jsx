import Lenis from "lenis";
import React, { useEffect, useRef } from "react";
import mikasa from "../assets/images/paths.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AttackOnTitan = () => {
  const holeRef = useRef(null);
  const sectionRef = useRef(null);

  // Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({ duration: 3 });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  // GSAP Animation
  useGSAP(() => {
    const hole = holeRef.current;
    if (!hole) return;

    // Create ScrollTrigger
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top -60%",
      end: "center 10%",
      // markers: true,
      scrub: 1, // Smooth scrub
      onUpdate: (self) => {
        const progress = self.progress; // 0 to 1
        let height = 0;

        if (progress <= 0.5) {
          // 0% → 50%: grow from 0 to 20vh
          height = gsap.utils.interpolate(0, 45, progress / 0.5);
          console.log(height)
        } else {
          // 50% → 100%: shrink from 20vh to 0
          height = gsap.utils.interpolate(45, 0, (progress - 0.5) / 0.5);
        }

        // Apply height (in vh units)
        gsap.set(hole, { attr: { height: `${height}vh` } });
      },
    });
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="bg-[#1e1e1e] w-full h-[300ontainer h-[300vh] relative mask-section overflow-hidden"
    >
      {/* Mikasa background image */}
      <img
        src={mikasa}
        alt="Mikasa"
        className="w-[60vh] fixed top-10 right-[8%] object-cover z-0"
      />

      {/* SVG Mask */}
      <svg
        className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <mask id="cutoutMask">
            <rect width="100%" height="100%" fill="white" />
            {/* Animated hole */}
            <rect
              ref={holeRef}
              id="hole"
              x="65%"
              y="50%"
              width="25vw"
              height="0vh" // Start at 0
              fill="black"
            />
          </mask>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="#1e1e1e"
          mask="url(#cutoutMask)"
        />
      </svg>

      {/* Texts */}
      <div className="relative z-30">
        <div className="w-[50vw] h-[100vh] flex items-center ml-10">
          <p className="p-8 text-3xl text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
            animi ipsa perspiciatis quod eligendi veniam? Quod veritatis, nobis
            cupiditate unde molestiae possimus numquam? Sint alias libero
            reiciendis adipisci soluta, vitae quas nemo, ea recusandae facere
            provident, voluptatem asperiores consequatur eius distinctio.
            Accusamus cum labore tempora aliquid. Dicta neque repellat itaque.
          </p>
        </div>

        <p className="w-[50vw] ml-16 mt-[100vh] text-6xl text-white font-[bebas] leading-snug">
          Once I'm dead, I won't even be able to remember you. So I'll win, no
          matter what. I'll live, no matter what! But if I win, I live. Unless I
          fight, I cannot win.
        </p>
      </div>
    </section>
  );
};

export default AttackOnTitan;