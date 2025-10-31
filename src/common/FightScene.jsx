import React, { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FightScene = ({path, maxFrames}) => {

  const canvasRef = useRef(null);
  const parentRef = useRef(null);
  const images = useRef([]);
  const frames = useRef({
    currentIndex: 0,
    maxIndex: maxFrames,
  });

  // ✅ Initialize Lenis for smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({ duration: 3 });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  // ✅ Handle Canvas frame animation
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    
    const { currentIndex, maxIndex } = frames.current;
    let imagesLoaded = 0;
    
    // Preload all frames
    const loadImages = () => {
      for (let i = 1; i <= maxIndex; i++) {
        const img = new Image();
        img.src = `/${path}/frame_${String(i).padStart(4, "0")}.webp`;
        img.onload = () => {
          imagesLoaded++;          
          if (imagesLoaded === +maxIndex) {
            drawFrame(currentIndex);
            startScrollAnimation();
          }
        };
        images.current.push(img);
      }
    };

    const drawFrame = (index) => {
      if (index < 0 || index >= images.current.length) return;
      const img = images.current[index];

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const scaleX = canvas.width / img.width;
      const scaleY = canvas.height / img.height;
      const scale = Math.max(scaleX, scaleY);

      const newWidth = img.width * scale;
      const newHeight = img.height * scale;
      const offsetX = (canvas.width - newWidth) / 2;
      const offsetY = (canvas.height - newHeight) / 2;

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = "high";
      context.drawImage(img, offsetX, offsetY, newWidth, newHeight);
    };

    // ✅ Animate frames on scroll using GSAP
    const startScrollAnimation = () => {
      gsap.timeline({
        scrollTrigger: {
          trigger: parentRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          // markers: true,
        },
      }).to(frames.current, {
        currentIndex: frames.current.maxIndex,
        onUpdate: () => {
          drawFrame(Math.floor(frames.current.currentIndex));
        },
        ease: "none",
      });
    };

    loadImages();

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-zinc-900 w-full">
      <div ref={parentRef} className={`h-[1000vh] bg-zinc-800 w-full relative left-0 top-0`}>
        <div className="h-screen w-full sticky left-0 top-0">
          <canvas ref={canvasRef} className="w-full h-screen" />
        </div>
      </div>
    </div>
  );
};

export default FightScene;
