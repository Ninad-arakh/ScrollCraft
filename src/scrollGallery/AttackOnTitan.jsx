import Lenis from "lenis";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import mikasa from "../assets/images/paths.jpg";

gsap.registerPlugin(ScrollTrigger);

const AttackOnTitan = () => {
  const holeRef = useRef(null);
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  // ✅ Smooth scrolling with Lenis
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2 });
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  // ✅ GSAP animations
  useGSAP(() => {
    // 🔸 1. Clip-path opening + closing animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 2,
      },
    });

    tl.set(holeRef.current, {
      clipPath:
        "polygon(0% 0%, 0% 100%, 64% 100%, 64% 65%, 92% 65%, 92% 65%, 64% 65%, 64% 100%, 100% 100%, 100% 0%)",
    });

    tl.to(holeRef.current, {
      clipPath:
        "polygon(0% 0%, 0% 100%, 64% 100%, 64% 45%, 92% 45%, 92% 65%, 64% 65%, 64% 100%, 100% 100%, 100% 0%)",
      ease: "none",
      duration: 1,
    });

    tl.to(holeRef.current, {
      clipPath:
        "polygon(0% 0%, 0% 100%, 64% 100%, 64% 95%, 92% 95%, 92% 95%, 64% 95%, 64% 100%, 100% 100%, 100% 0%)",
      ease: "none",
      duration: 1,
    });

    // 🔸 2. Parallax effect on background image
    gsap.to(imageRef.current, {
      yPercent: -20, // move upward slower than scroll
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#1e1e1e] w-full h-[300vh] relative overflow-hidden"
    >
      {/* Mikasa parallax image */}
      <img
        ref={imageRef}
        src={mikasa}
        alt="Mikasa"
        className="w-[60vh] fixed top-10 right-[8%] object-cover opacity-90 -z-10"
      />

      {/* Animated cutout layer */}
      <div ref={holeRef} className="z-30 bg-lime-300 relative">
        <div className="w-[50vw] h-[100vh] flex items-center ml-10">
          <p className="p-8 text-3xl text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
            animi ipsa perspiciatis quod eligendi veniam?
          </p>
        </div>

        <p className="w-[50vw] ml-16 mt-[135vh] text-6xl text-white font-[bebas] leading-snug">
          Once I'm dead, I won't even be able to remember you. So I'll win, no
          matter what. I'll live, no matter what! But if I win, I live. Unless I
          fight, I cannot win.
        </p>
      </div>
    </section>
  );
};

export default AttackOnTitan;