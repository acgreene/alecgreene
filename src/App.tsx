/*  
    --- App.tsx ---
    Copyright © 2023 Alec Greene - All Rights Reserved.
    Author: Alec Greene

    About: 
        * 

    TO DO: 
        * 
*/

import Cursor from "./components/Cursor";
import ProgressBar from "./components/ProgressBar";
import Logo from "./components/Logo";
import NavBar from "./components/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="bg-black relative top-0 left-0 w-full overflow-hidden overscroll-none sm:cursor-none select-none">
      <Cursor />
      <div className="sm:hidden">
        <ProgressBar />
        <Logo />
      </div>
      <div className="xl:max-w-[1280px] w-full">
        <NavBar />
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
                <About />
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
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
