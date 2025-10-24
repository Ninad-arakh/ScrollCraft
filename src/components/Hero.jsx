import React, { useRef, useEffect } from "react";
import HeroForeground from "./HeroForeground";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bgWall from "/bg-videos/amv_web.mp4";
import bgWallPoster from "/bg-videos/tanjiro.png";
import { useGSAP } from "@gsap/react";
import Section2 from "./Section2";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const videoWrapperRef = useRef(null);
  const heroRef = useRef(null);

  // top view distortion animation on scroll
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        // start: "top -10%",
        start: "top top",
        end: "bottom 20%",
        scrub: 0.2,
        pin: true,
        // anticipatePin:1,
        // markers: true,
      },
    });

    tl.fromTo(
      videoWrapperRef.current,
      {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        scale: 1,
        filter: "brightness(1)",
      },
      {
        clipPath: "polygon(5% 0, 95% 0, 100% 102%, 0 102%)",
        // scale: 1.05,
        filter: "brightness(0.7)",
        ease: "none",
        overflow: "hidden",
        opacity: 0.9,
      }
    );
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.7,
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
    <section className="absolute top-0 w-full scrollbar-hidden section">
      {/* Background image or video */}
      <div ref={heroRef}>
        <div
          ref={videoWrapperRef}
          className="absolute top-0 left-0 w-full h-screen overflow-hidden "
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            transition: "clip-path 0.3s ease",
          }}
        >
          <video
            src={bgWall}
            autoPlay
            muted
            loop
            playsInline
            className="w-full origin-top bg-cover"
            poster={bgWallPoster}
          ></video>
        </div>

        <div className="w-full h-screen z-10">
          <HeroForeground />
        </div>
      </div>
      <div className="w-full -mt-3">
        <Section2 />
      </div>
    </section>
  );
};

export default Hero;
