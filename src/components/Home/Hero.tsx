import { Icon } from "@chakra-ui/react";
import StaticMarquee from "./StaticMarquee";
import { BsCodeSlash } from "react-icons/bs";
import { GiSoundWaves } from "react-icons/gi";
import { windowScrollVelocity } from "../../recoil/atoms";
import { useRecoilState } from "recoil";
import DynamicMarquee from "./DynamicMarquee";
import MyComponent from "./LoopingElement";
import LoopingElement from "./LoopingElement";

const Hero = () => {
  const marquee_speed = 0.25;
  return (
    <div className="flex justify-center items-center w-full md:flex-row h-96">
      <div className="relative w-full h-full flex flex-col justify-center items-center text-white">
        <div className="w-full text-6xl my-10">
          <div className="w-full h-1/2 flex justify-start items-end">
            <h1>ALEC</h1>
          </div>
          <div className="w-full h-1/2 flex justify-end items-start">
            <h1>GREENE</h1>
          </div>
        </div>

        <div
          className="relative w-full items-center flex flex-row justify-center my-10"
          style={{ transform: "skew(5deg)" }}
        >
          <LoopingElement
            currentTranslation={0}
            speed={marquee_speed}
            color={""}
          />
          <LoopingElement
            currentTranslation={-100}
            speed={marquee_speed}
            color={""}
          />
          {/* <div className="relative"></div>
          <div className="relative"></div> */}
        </div>

        {/* <StaticMarquee
          element={
            <div className="flex shrink-0">
              <div className="px-2">
                <span className="px-1">software dev</span>
                <Icon as={BsCodeSlash}></Icon>
              </div>
              <div className="px-2">
                <span className="px-1">sound engineer</span>
                <Icon as={GiSoundWaves}></Icon>
              </div>
            </div>
          }
          speed={10}
          direction={true}
        ></StaticMarquee> */}
      </div>
    </div>
  );
};
export default Hero;
