import React, { useEffect, useRef } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import UniverseScroll from "./components/UniverseScroll";
import Scrollinitiation from "./Experience/Scrollinitiation";
import Section2 from "./components/Section2";
import gsap from "gsap";
import Navbar from "./components/Navbar";

const App = () => {

  const navRef = useRef(null);
  const lastScrollY = useRef(window.scrollY);
  const isHidden = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && !isHidden.current) {
        // Scrolling down
        gsap.to(navRef.current, { y: '-100%', duration: 0.3, ease: 'power2.out' });
        isHidden.current = true;
      } else if (currentScrollY < lastScrollY.current && isHidden.current) {
        // Scrolling up
        gsap.to(navRef.current, { y: '0%', duration: 0.3, ease: 'power2.out' });
        isHidden.current = false;
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
  return (
    <div className="w-full h-screen">
      <BrowserRouter>
        <div ref={navRef}
          className="fixed top-3 w-full text-white flex justify-center z-50 navbar">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/section2" element={<Section2 />} />
          <Route path="/universeScroll" element={<UniverseScroll />} />
          <Route path="/experience" element={<Scrollinitiation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
