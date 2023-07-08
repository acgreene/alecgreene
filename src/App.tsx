import Cursor from "./components/Cursor";
import NavBar from "./components/NavBar";
import Hero from "./components/Cards/Hero";
import About from "./components/About/About";
import Blog from "./components/Blog";
import Portfolio from "./components/Portfolio";
import { useRecoilState } from "recoil";
import { windowScrollVelocity } from "./recoil/atoms";
import ProgressBar from "./components/ProgressBar";
import { Route, Routes } from "react-router-dom";
import { Divider } from "@chakra-ui/react";

function App() {
  const [scrollVel, setScrollVel] = useRecoilState(windowScrollVelocity);

  return (
    <div className="bg-black relative top-0 left-0 w-full overflow-hidden overscroll-none sm:cursor-none select-none">
      <Cursor />
      <div className="sm:hidden">
        <ProgressBar />
      </div>
      <div className="xl:max-w-[1280px] w-full">
        <NavBar />
      </div>
      <div className="flex justify-center items-start w-full px-6">
        <Routes>
          <Route
            path="/"
            element={
              <div className="w-full h-80 sm:px-16">
                <Hero />
              </div>
            }
          ></Route>
          <Route
            path="/about"
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
    </div>
  );
}

export default App;
