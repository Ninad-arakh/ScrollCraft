import React, { useRef, useEffect } from "react";
import Navbar from "./Navbar";
import HeroForeground from "./HeroForeground";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  const navigate = useNavigate();

  // scrollbar hiding functionality with simple javascript
  // useEffect(() => {
  //   const navbar = navbarRef.current;
  //   const trigger = triggerRef.current;
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (!entry.isIntersecting) {
  //           navbar.classList.remove("scrolled");
  //         } else {
  //           navbar.classList.add("scrolled");
  //         }
  //       });
  //     },
  //     { threshold: 0.1 } // Trigger when 20% of trigger is out of view, approximating "top 20%"
  //   );
  //   if (trigger) observer.observe(trigger);
  //   return () => {
  //     if (trigger) observer.unobserve(trigger);
  //   };
  // }, []);

  // useEffect(() => {
  //   const el = heroRef.current;

  //   ScrollTrigger.create({
  //     trigger: el,
  //     start: "bottom bottom",
  //     markers: true,
  //     onEnter: () => {
  //       gsap.to(el, {
  //         opacity: 0,
  //         duration: 0.8,
  //         ease: "power2.out",
  //         onComplete: () => navigate("/section2"),
  //       });
  //     },
  //   });
  // }, [navigate]);

  return (
    <section  className="relative w-full scrollbar-hidden">
      {/* <div className="w-full h-screen z-0 absolute top-0">
        {/* Add background amv here 
      </div> */}

      <div className="w-full h-screen z-0 absolute top-0 bg-cover bg-center bg-your-image">
        {/* Background image or video */}
      </div>

      <div className="w-full ">
        <div className="w-full h-screen z-10">
          <HeroForeground />
        </div>
        {/* Trigger point after initial hero section */}
        <div className="w-full h-[50vh] bg-red-500"></div>
      </div>
    </section >
  );
};

export default Hero;
