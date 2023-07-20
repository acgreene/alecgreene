/*  
    --- App.tsx ---
    Copyright © 2023 Alec Greene - All Rights Reserved.
    Author: Alec Greene

    About: 
        Holds all of the design and logic for my website.

    TO DO: 
        * 
*/

import ProgressBar from "./components/objects/ProgressBar";
import Menu from "./components/objects/Menu";
import Home from "./components/pages/Home/Home";
import Resume from "./components/pages/Resume/Resume";
import Portfolio from "./components/pages/Portfolio/Portfolio";
import Blog from "./components/pages/Blog/Blog";
import Footer from "./components/objects/Footer";
import { Route, Routes } from "react-router-dom";
import { scrollStates } from "./recoil/scrollStates";
import { windowStates } from "./recoil/windowStates";
import AnimatedSquare from "./components/objects/AnimatedSquare";
import { squares } from "./constants";

function App() {
  scrollStates();
  windowStates();
  return (
    <div className="bg-black relative top-0 left-0 w-full overflow-hidden overscroll-none select-none font-primary lowercase">
      <Menu />
      <div className="sm:hidden">
        <ProgressBar />
      </div>
      <div className="flex justify-center items-start w-full px-6">
        <Routes>
          <Route
            path="/"
            element={
              <div className="w-full sm:px-16">
                <Home />
              </div>
            }
          ></Route>
          <Route
            path="/resume"
            element={
              <div>
                <Resume />
              </div>
            }
          ></Route>
          <Route
            path="/portfolio"
            element={
              <div>
                <Portfolio />
              </div>
            }
          ></Route>
          <Route
            path="/blog"
            element={
              <div>
                <Blog />
              </div>
            }
          ></Route>
          <Route
            path="/sketch"
            element={
              <div className="h-[800vh]">
                {squares.map((square, index) => (
                  <AnimatedSquare
                    key={index}
                    rgb={square.rgb}
                    opacity={square.opacity}
                    size={square.size}
                    rotationConstant={square.rotationConstant}
                    translationXConstant={square.translationXConstant}
                    translationYConstant={square.translationYConstant}
                    top={square.top}
                    left={square.left}
                  ></AnimatedSquare>
                ))}
              </div>
            }
          ></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
