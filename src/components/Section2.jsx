// src/components/Section2.jsx
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section2 = () => {
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const el = sectionRef.current;

    // When user scrolls to bottom of section2 → go to universeScroll
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "bottom bottom",
      onEnter: () => {
        gsap.to(el, {
          opacity: 0,
          duration: 1,
          ease: "power2.out",
          onComplete: () => navigate("/"),
        });
      },
      // When scrolls back to top → go to Hero
      onLeaveBack: () => {
        gsap.to(el, {
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          onComplete: () => navigate("/"),
        });
      },
    });

    return () => trigger.kill();
  }, [navigate]);

  return (
    <section
      ref={sectionRef}
      className="relative w-screen h-[200vh] bg-[radial-gradient(circle_at_center,_#0a0a0a_0%,_#000_100%)] flex flex-col items-center justify-center text-center"
    >
      <h2 className="text-5xl font-bold mb-10">The Awakening Realm</h2>
      <p className="max-w-xl text-gray-400 leading-relaxed">
        As you descend deeper, your surroundings distort. Shadows pulse with
        energy, preparing the portal to the next dimension.
      </p>

      <div className="absolute bottom-10 text-gray-500 animate-pulse">
        Scroll down to enter the next realm
      </div>
    </section>
  );
};

export default Section2;
