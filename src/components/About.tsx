import React from "react";
import { useRecoilState } from "recoil";
import {
  react,
  typescript,
  tailwind,
  cpp,
  expressjs,
  juce,
  mongodb,
  nodejs,
  python,
  ableton,
  logicpro,
  cubase,
  kicad,
} from "../assets";
import { cursorState } from "../recoil/atoms";

const About = () => {
  const [active, setActive] = useRecoilState(cursorState);
  return (
    <div className="flex justify-center items-center h-100 flex-row flex-wrap sm:mb-20 mb-6 text-white">
      <div className="mt-10 mb-10">
        <p className="font-thin text-5xl">
          endlessly learning, <br />
          inpired through technical and creative mediums, <br />
          engineering for work <br />
          and for fun. <br />
        </p>
      </div>

      <div className="mt-10 mb-10 w-screen">
        <span className="text-5xl">explorations</span>
        <div className="w-100 h-px mt-5 mb-5 bg-white"></div>
        <div>
          {/* audio plugin dev */}
          <div className="w-full flex flex-row">
            <span className="text-3xl">audio plug-in dev</span>
            <a
              className="z-10 cursor-none w-16"
              href="https://juce.com/"
              target="_blank"
              onMouseEnter={() => setActive(true)}
              onMouseLeave={() => setActive(false)}
            >
              <img src={juce} alt="juce" />
            </a>
            <a
              className="z-10 cursor-none"
              href="https://cplusplus.com/"
              target="_blank"
              onMouseEnter={() => setActive(true)}
              onMouseLeave={() => setActive(false)}
            >
              <img src={cpp} alt="cpp" />
            </a>
          </div>

          {/* front end dev */}
          <div className="w-full flex flex-row">
            <span className="text-3xl">front end dev</span>
            <a
              className="z-10 cursor-none"
              href="https://reactjs.org/"
              target="_blank"
              onMouseEnter={() => setActive(true)}
              onMouseLeave={() => setActive(false)}
            >
              <img src={react} alt="react" />
            </a>
            <a
              className="z-10 cursor-none"
              href="https://www.typescriptlang.org/"
              target="_blank"
              onMouseEnter={() => setActive(true)}
              onMouseLeave={() => setActive(false)}
            >
              <img src={typescript} alt="typescript" />
            </a>
            <a
              className="z-10 cursor-none"
              href="https://tailwindcss.com/"
              target="_blank"
              onMouseEnter={() => setActive(true)}
              onMouseLeave={() => setActive(false)}
            >
              <img src={tailwind} alt="tailwind" />
            </a>
          </div>

          {/* back end dev */}
          <div className="w-full flex flex-row">
            <span className="text-3xl">back end dev</span>
            <a
              className="z-10 cursor-none"
              href="https://nodejs.org/en/"
              target="_blank"
              onMouseEnter={() => setActive(true)}
              onMouseLeave={() => setActive(false)}
            >
              <img src={nodejs} alt="nodejs" />
            </a>
          </div>

          {/* data */}
          <div className="w-full flex flex-row">
            <span className="text-3xl">data</span>
            <a
              className="z-10 cursor-none"
              href="https://www.mongodb.com/"
              target="_blank"
              onMouseEnter={() => setActive(true)}
              onMouseLeave={() => setActive(false)}
            >
              <img src={mongodb} alt="mongodb" />
            </a>
          </div>

          {/* automation, scripting */}
          <div className="w-full flex flex-row">
            <span className="text-3xl">automation, scripting</span>
            <a
              className="z-10 cursor-none"
              href="https://www.python.org/"
              target="_blank"
              onMouseEnter={() => setActive(true)}
              onMouseLeave={() => setActive(false)}
            >
              <img src={python} alt="python" />
            </a>
          </div>

          {/* mixing/recording */}
          <div className="w-full flex flex-row">
            <span className="text-3xl">audio tracking, mixing</span>
            <a
              className="z-10 cursor-none w-14"
              href="https://www.ableton.com/en/"
              target="_blank"
              onMouseEnter={() => setActive(true)}
              onMouseLeave={() => setActive(false)}
            >
              <img src={ableton} alt="ableton" />
            </a>
            <a
              className="z-10 cursor-none w-16"
              href="https://www.steinberg.net/cubase/"
              target="_blank"
              onMouseEnter={() => setActive(true)}
              onMouseLeave={() => setActive(false)}
            >
              <img src={cubase} alt="cubase" />
            </a>
            <a
              className="z-10 cursor-none w-16"
              href="https://www.apple.com/logic-pro/"
              target="_blank"
              onMouseEnter={() => setActive(true)}
              onMouseLeave={() => setActive(false)}
            >
              <img src={logicpro} alt="logicpro" />
            </a>
          </div>

          {/* schematic */}
          <div className="w-full flex flex-row">
            <span className="text-3xl">schematics, pcbs</span>
            <a
              className="z-10 cursor-none w-16"
              href="https://www.kicad.org/"
              target="_blank"
              onMouseEnter={() => setActive(true)}
              onMouseLeave={() => setActive(false)}
            >
              <img src={kicad} alt="kicad" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
