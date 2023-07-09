import Cursor from "./components/Cursor";
import NavBar from "./components/NavBar";
import About from "./components/About/About";
import Blog from "./components/Blog";
import Portfolio from "./components/Portfolio";
import { useRecoilState } from "recoil";
import { windowScroll, windowScrollVelocity } from "./recoil/atoms";
import ProgressBar from "./components/ProgressBar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";

function App() {
  const [scrollVel, setScrollVel] = useRecoilState(windowScrollVelocity);
  const [scrollPos, setScrollPos] = useRecoilState(windowScroll);
  console.log(scrollPos);
  return (
    <div className="bg-black relative top-0 left-0 w-full overflow-hidden overscroll-none sm:cursor-none select-none">
      <Cursor />
      <div className="sm:hidden">
        <ProgressBar />

        {/* my logo icon thingy */}
        <div
          className="fixed flex bg-indigo-500 top-5 left-5 text-2xl px-6 pb-10 z-50 ease-in-out duration-500"
          style={{
            height: `${scrollPos > 200 ? "35px" : "150px"}`,
            width: `${scrollPos > 200 ? "55px" : "128px"}`,
            flexDirection: `${scrollPos > 200 ? "row" : "column"}`,
            paddingBottom: `${scrollPos > 200 ? "0px" : "40px"}`,
            paddingLeft: `${scrollPos > 200 ? "0px" : "24px"}`,
            paddingRight: `${scrollPos > 200 ? "0px" : "24px"}`,
          }}
        >
          <div
            className="w-full h-1/2 flex"
            style={{
              alignItems: `${scrollPos > 200 ? "flex-start" : "flex-end"}`,
              justifyContent: `${scrollPos > 200 ? "center" : "flex-start"}`,
            }}
          >
            <span
              style={{
                fontWeight: `${scrollPos > 200 ? "700" : "400"}`,
                transform: `${
                  scrollPos > 200
                    ? "translateX(7px) translateY(0px)"
                    : "translateX(0px) translateY(0px)"
                }`,
              }}
            >
              a
            </span>
            <div
              style={{
                display: `${scrollPos > 200 ? "none" : "flex"}`,
              }}
            >
              <span>l</span>
              <span>e</span>
              <span>c</span>
            </div>
          </div>
          <div
            className="w-full h-1/2 flex justify-start items-start font-bold"
            style={{
              transform: `${
                scrollPos > 200
                  ? "translateX(0px) translateY(0px)"
                  : "translateX(0px) translateY(-12px)"
              }`,
            }}
          >
            <span>g</span>
            <div
              style={{
                display: `${scrollPos > 200 ? "none" : "flex"}`,
              }}
            >
              <span>r</span>
              <span>e</span>
              <span>e</span>
              <span>n</span>
              <span>e</span>
            </div>
          </div>
        </div>
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
