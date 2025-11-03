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
  const screen = window.screen.width;
  let isMob;

  if (screen <= 486) isMob = true;

  // top view distortion animation on scroll
  useGSAP(() => {
    if (!isMob) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          // start: "top -10%",
          start: "top top",
          end: "bottom 20%",
          scrub: true,
          pin: true,
          // anticipatePin:1,
          // markers: true,
        },
      });

      gsap.from(".section", {
        display: "none",
        duration: 5,
      });

      tl.fromTo(
        videoWrapperRef.current,
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          scale: 1,
          filter: "brightness(1)",
        },
        {
          clipPath: "polygon(10% 2%, 90% 2%, 100% 102%, 0 102%)",
          // scale: 1.05,
          filter: "brightness(0.7)",
          borderRadius: "30%",
          ease: "none",
          overflow: "hidden",
          opacity: 0.9,
        }
      );
    }
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
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


  const dataLoaded = () => {};

  return (
    <section className="absolute top-0 w-full scrollbar-hidden section">
      {/* Background image or video */}
      <div ref={heroRef}>
        <div
          ref={videoWrapperRef}
          className="absolute top-0 left-0 w-full h-screen overflow-hidden "
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            transition: "clip-path ease",
          }}
        >
          <video
            src={bgWall}
            autoPlay
            muted
            loop
            playsInline
            className="w-full origin-top bg-cover "
            poster={bgWallPoster}
            onLoadedData={dataLoaded}
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

// clipPath: "polygon(0% 0%, 0% 100%, 64% 100%, 64% 45%, 92% 45%, 92% 45%, 64% 95%, 64% 100%, 100% 100%, 100% 0%)"
