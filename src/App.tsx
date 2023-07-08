import Cursor from "./components/Cursor";
import NavBar from "./components/NavBar";
import Hero from "./components/Cards/Hero";
import About from "./components/About/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import { useRecoilState } from "recoil";
import { windowScrollVelocity } from "./recoil/atoms";
import ProgressBar from "./components/ProgressBar";
import { Route, Routes } from "react-router-dom";

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
      <Routes>
        <Route
          path="/"
          element={
            <div className="sm:px-16 px-6">
              <div className="flex justify-center items-start w-full h-80">
                <Hero />
              </div>

              <div className="bg-black flex justify-center items-start">
                <div className="xl:max-w-[1280px] w-full">
                  <About />
                  <Portfolio />
                  <Blog />
                  <Contact />
                </div>
              </div>
            </div>
          }
        ></Route>
      </Routes>
    </div>

    // <div className="bg-black relative top-0 left-0 w-full overflow-hidden overscroll-none sm:cursor-none select-none">
    //     <Cursor />

    // <div className="sm:hidden">
    //   <ProgressBar />
    // </div>

    // <div className="xl:max-w-[1280px] w-full">
    //   <NavBar />
    // </div>

    //     {/* wrapper for all structured content */}
    //     <div className="sm:px-16 px-6">
    //       <div className="flex justify-center items-start w-full h-80">
    //         <Hero />
    //       </div>

    //       <div className="bg-black flex justify-center items-start">
    //         <div className="xl:max-w-[1280px] w-full">
    //           <About />
    //           <Portfolio />
    //           <Blog />
    //           <Contact />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
  );
}

export default App;
