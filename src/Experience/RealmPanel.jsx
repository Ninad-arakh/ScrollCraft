import React, { useRef } from "react";
import wallPaper from "../assets/images/DemonSlayer.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useIsMobile from "../common/useIsMobile";

gsap.registerPlugin(ScrollTrigger);

const RealmPanel = () => {
  const imageRef = useRef(null);
  const divRef = useRef(null);

  const isMob = useIsMobile();

  useGSAP(() => {
    gsap.set(imageRef.current, { transformOrigin: "center center" });

    const tl = gsap.timeline(
      {
        scrollTrigger: {
          trigger: divRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 2,
          pin: true,
          // markers: true,
        },
      },
      "<"
    );

    tl.to(imageRef.current, {
      scale: 60,
      y: -1200 + "vh",
      x: !isMob ? 50 + "vw" : -50 + "vw",
    });
    tl.to(divRef.current, {
      opacity: 0,
      delay: -0.25,
      display: "none",
    });
    tl.fromTo(
      divRef.current,
      {
        backgroundColor: "#1e1e1e",
      },
      {
        backgroundColor: "#00000000",
      }, "<-=0.2"
    );
  }, []);
  return (
    <div
      ref={divRef}
      className="w-full h-[150vh]  z-10 overflow-hidden top-0 left-0"
    >
      <img
        ref={imageRef}
        src={wallPaper}
        alt="DemonSlayerWallpaper"
        className="w-screen h-screen object-cover"
      />
    </div>
  );
};

export default RealmPanel;
