import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const FireParticles = ({ count = 50 }) => {
  const containerRef = useRef(null);
  const colors = ["#ff5b00", "#ff7b00", "#ffae00", "#ffffff"]; // red → orange → yellow → white

  useEffect(() => {
    const particles = containerRef.current.querySelectorAll(".particle");

    particles.forEach((p) => {
      const delay = gsap.utils.random(0, 3);

      gsap.fromTo(
        p,
        {
          x: 0,
          y: 20,
          scale: gsap.utils.random(0.4, 1.2),
          opacity: 1,
        },
        {
          x: gsap.utils.random(-5, 10) + "vw", // slight horizontal jitter
          y: gsap.utils.random(-30, -100) + "vh", // always upward
          opacity: 0.20,
        //   scale: 0,
          duration: gsap.utils.random(1.2, 5),
          repeat: -1,
          ease: "power1.out",
          delay,
        }
      );
    });
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        filter: "blur(2px)",     // fires need blur
        mixBlendMode: "screen",  // makes colors glow over each other
      }}
    >
      {[...Array(count)].map((_, i) => (
        <div
          className="particle"
          key={i}
          style={{
            width: `${Math.floor(Math.random() * 8 + 6)}px`,
            height: `${Math.floor(Math.random() * 8 + 6)}px`,
            background: colors[Math.floor(Math.random() * colors.length)],
            borderRadius: "50%",
            position: "absolute",
            bottom: "0%", // fire starts from bottom
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
};

export default FireParticles;
