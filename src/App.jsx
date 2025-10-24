import React, { useEffect, useRef } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import CharGallery from "./components/CharGallery";
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
        gsap.to(navRef.current, { y: '-120%', duration: 0.3, ease: 'power2.out' });
        isHidden.current = true;
      } else if (currentScrollY < lastScrollY.current && isHidden.current) {
        // Scrolling up
        gsap.to(navRef.current, { y: '0%', duration: 0.3, ease: 'power2.out' });
        isHidden.current = false;
      }
      lastScrollY.current = currentScrollY;
      // console.log(currentScrollY)
      
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
  return (
    <div className="w-full h-screen box-border">
      <BrowserRouter>
        <div ref={navRef}
          className="fixed top-2 w-full text-white flex justify-center z-50 ">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/experience" element={<Scrollinitiation />} />
          <Route path="/scrollGallery" element={<CharGallery />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
