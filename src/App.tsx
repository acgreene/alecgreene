import React from "react";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { RecoilRoot } from "recoil";
import Cursor from "./components/Cursor";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";

function App() {
  return (
    <RecoilRoot>
      <div className="bg-black overflow-hidden relative top-0 left-0 w-screen h-screen cursor-default sm:cursor-none">
        <Cursor />

        <div className="sm:px-16 px-6 flex justify-center items-center">
          <div className="xl:max-w-[1280px] w-full">
            <NavBar />
          </div>
        </div>

        <div className="bg-primary flex justify-center items-start">
          <div className="xl:max-w-[1280px] w-full">
            <Hero />
          </div>
        </div>
      </div>
    </RecoilRoot>
  );
}

export default App;
