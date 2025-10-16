import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import UniverseScroll from "./components/UniverseScroll";

const App = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/experience" element={<UniverseScroll />} />
          <Route path="/" element={<Hero />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
