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
import Marquee from "./Marquee";

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

      <div className="mt-10 mb-10 w-full">
        <span className="text-5xl">explorations</span>
        <div className="w-100 h-px mt-5 mb-5 bg-white"></div>
        <div className="marquee">
          <div className="marquee-inner">
            <Marquee />
            <Marquee />
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
