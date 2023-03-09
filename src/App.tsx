import React from "react";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Cursor from "./components/Cursor";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="bg-black relative top-0 left-0 w-full overflow-hidden sm:cursor-none select-none">
      <Cursor />

      <div className="bg-black sm:px-16 px-6 flex justify-center items-center">
        <div className="xl:max-w-[1280px] w-full">
          <NavBar />
        </div>
      </div>

      <div className="bg-black flex justify-center items-start">
        <div className="xl:max-w-[1280px] w-full">
          <Hero />
        </div>
      </div>

      <div className="bg-black sm:px-16 px-6 flex justify-center items-start">
        <div className="xl:max-w-[1280px] w-full">
          <About />
          <Portfolio />
          <Blog />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
