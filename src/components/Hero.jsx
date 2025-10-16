import React, { useRef, useEffect } from "react";
import Navbar from "./Navbar";
import HeroForeground from "./HeroForeground";

const Hero = () => {
  const navbarRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const navbar = navbarRef.current;
    const trigger = triggerRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            navbar.classList.remove("scrolled");
          } else {
            navbar.classList.add("scrolled");
          }
        });
      },
      { threshold: 0.1 } // Trigger when 20% of trigger is out of view, approximating "top 20%"
    );

    if (trigger) observer.observe(trigger);

    return () => {
      if (trigger) observer.unobserve(trigger);
    };
  }, []);

  return (
    <div className="relative w-screen">
      {/* <div className="w-full h-screen z-0 absolute top-0">
        {/* Add background amv here 
      </div> */}

      <div className="w-full h-screen z-0 absolute top-0 bg-cover bg-center bg-your-image">
        {/* Background image or video */}
      </div>

      <div className=" w-screen ">
        <div ref={navbarRef}
          className="fixed top-3 w-full text-white flex justify-center z-50 navbar">
          <Navbar />
        </div>

        <div className="w-full h-screen z-10">
          <HeroForeground />
        </div>
        {/* Trigger point after initial hero section */}
        <div ref={triggerRef} className="w-full h-[50vh] bg-red-500"></div>
      </div>
    </div>
  );
};

export default Hero;

// import React, { useRef } from "react";
// import Navbar from "./Navbar";
// import HeroForeground from "./HeroForeground";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger)

// const Hero = () => {
// //   const navbarRef = useRef(null)
// //   useGSAP(() => {
// //   gsap.to(".hero-container", {
// //     y: -100,
// //     ease: "none",
// //     scrollTrigger: {
// //       trigger: ".hero-container",
// //       start: "top 20%",
// //       end: "bottom top",
// //       scrub: true,
// //       markers: true,
// //     },
// //   });
// // }, []);

//   return (
//     <div className="relative w-screen">
//       <div className="w-full h-screen z-0 absolute top-0  ">
//         {/* Add background amv here */}
//       </div>

//       <div className="relative w-screen hero-container">
//       <div className="fixed top-2 w-full  text-white flex justify-center z-50 ">
//         <Navbar />
//         </div>
//       </div>

//       <div className="w-full h-screen z-10 ">
//         <HeroForeground />
//       </div>
//       <div className="w-full h-[50vh] bg-red-500"></div>
//     </div>
//   );
// };

// export default Hero;
