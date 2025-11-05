import React, { Suspense, useEffect, useRef } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import CharGallery from "./components/CharGallery";
// import Scrollinitiation from "./Experience/Scrollinitiation";
import gsap from "gsap";
import Navbar from "./components/Navbar";
import InitialLoader from "./components/InitialLoader";
import About from "./components/About";
const Scrollinitiation = React.lazy(() =>
  import("./Experience/Scrollinitiation")
);
const About = React.lazy(() =>
  import("./components/About")
);

const App = () => {
  const navRef = useRef(null);
  const lastScrollY = useRef(window.scrollY);
  const isHidden = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && !isHidden.current) {
        // Scrolling down
        gsap.to(navRef.current, {
          y: "-120%",
          duration: 0.3,
          ease: "power2.out",
        });
        isHidden.current = true;
      } else if (currentScrollY < lastScrollY.current && isHidden.current) {
        // Scrolling up
        gsap.to(navRef.current, { y: "0%", duration: 0.3, ease: "power2.out" });
        isHidden.current = false;
      }
      lastScrollY.current = currentScrollY;
      // console.log(currentScrollY)
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full h-screen box-border">
      <InitialLoader />
      <BrowserRouter>
        <div
          ref={navRef}
          className="fixed top-2 w-full text-white flex justify-center z-50 "
        >
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Hero />} />

          <Route
            path="/experience"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Scrollinitiation />{" "}
              </Suspense>
            }
          />

          <Route path="/scrollGallery" element={<CharGallery />} />
          <Route
            path="/about"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <About />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
