import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";

const InitialLoader = () => {
  const counterRef = useRef(null);
  const stairParentRef = useRef(null);
  const pageRef = useRef(null);
  const [currentValue, setCurrentValue] = useState(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Simulate content loading (replace this with your actual load logic)
    const timer = setTimeout(() => setIsReady(true), 5000); // simulate 5s load
    return () => clearTimeout(timer);
  }, []);

  
  useGSAP(() => {
    const tl = gsap.timeline();
    const counterObj = { value: 0 };

    // Stage 1: Fast start (0 → 30)
    tl.to(counterObj, {
      value: 30,
      color: "#0fff8f",
      duration: 1.2,
      ease: "power2.out",
      onUpdate: () => setCurrentValue(Math.floor(counterObj.value)),
    });

    // Stage 2: Slower (30 → 60)
    tl.to(counterObj, {
      value: 60,
      color: "#a5f400",
      duration: 1.5,
      ease: "power1.out",
      onUpdate: () => setCurrentValue(Math.floor(counterObj.value)),
    });

    // Stage 3: Even slower (60 → 90)
    tl.to(counterObj, {
      value: 90,
      duration: 3,
      ease: "power1.out",
      onUpdate: () => setCurrentValue(Math.floor(counterObj.value)),
    });

    // Stage 4: Wait here until the content is ready
    const wait = gsap.to({}, { duration: 9999 }); // dummy long wait
    tl.add(wait, ">"); // pause timeline here

    // When content is ready, finish to 100%
    const completeLoader = () => {
      wait.kill(); // stop waiting
      tl.to(counterObj, {
        value: 100,
        duration: 2,
        ease: "power2.inOut",
        onUpdate: () => setCurrentValue(Math.floor(counterObj.value)),
        onComplete: () => {
          gsap.to(counterRef.current, {
            color: "#ff0000",
            duration: 0.5,
            ease: "power1.inOut",
          });
        },
      });
    };

    // Listen for readiness
    if (isReady) completeLoader();
    else {
      const unsub = setInterval(() => {
        if (isReady) {
          clearInterval(unsub);
          completeLoader();
        }
      }, 100);
    }

    tl.to(counterRef.current, {
        delay:1,
        opacity:0,
        display:"none"
    });

    tl.to(".stairs", {
      y: "-100%",
      stagger: {
        amount: -0.5,
      },
    });
    tl.to(pageRef.current, {
      display: "none",
    });
  }, [isReady]);

  return (
    <div
      ref={pageRef}
      className="fixed inset-0 z-[9999] flex justify-center items-center overflow-hidden"
    >
      <p ref={counterRef} className="text-8xl md:text-9xl font-[MOB] z-40">
        {currentValue} <span>%</span>
      </p>

      <div ref={stairParentRef} className=" w-full h-screen  top-0 fixed">
        <div className="flex w-full h-full ">
          <div className="stairs w-1/5 h-full -mx-1 bg-black"></div>
          <div className="stairs w-1/5 h-full -mx-1 bg-black"></div>
          <div className="stairs w-1/5 h-full -mx-1 bg-black"></div>
          <div className="stairs w-1/5 h-full -mx-1 bg-black"></div>
          <div className="stairs w-1/5 h-full -mx-1 bg-black"></div>
          <div className="stairs w-1/5 h-full -mx-1 bg-black"></div>
          <div className="stairs w-1/5 h-full -mx-1 bg-black"></div>
        </div>
      </div>
    </div>
  );
};

export default InitialLoader;
