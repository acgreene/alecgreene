import { Icon } from "@chakra-ui/react";
import StaticMarquee from "./StaticMarquee";
import { BsCodeSlash } from "react-icons/bs";
import { GiSoundWaves } from "react-icons/gi";
import { windowScrollVelocity } from "../../recoil/atoms";
import { useRecoilState } from "recoil";
import MyComponent from "./DynamicMarquee";
import DynamicMarquee from "./DynamicMarquee";

const Hero = () => {
  const marquee_speed = 0.25;
  const [scrollVel, setScrollVel] = useRecoilState(windowScrollVelocity);
  return (
    <div className="flex flex-col justify-center items-center w-full md:flex-row h-full">
      <div className="relative flex flex-col justify-start items-center w-full h-screen">
        <div className="text-white text-4xl w-full h-screen flex relative items-center">
          endlessly learning, <br />
          <br />
          inpired through technical and creative mediums, <br />
          <br />
          engineering for work, <br />
          <br />
          and for fun. <br />
        </div>
      </div>

      <div className="relative w-full h-full flex flex-col justify-center items-center mt-24 text-white">
        <div
          className={`relative w-full items-center flex flex-row justify-center text-indigo-400`}
          style={{ transform: "rotate(-5deg)" }}
        >
          {/* <div
            className="absolute bg-indigo-900 h-28 ease-in duration-100"
            style={{
              width: "200vw",
              opacity: "0.2",
            }}
          ></div> */}
          <DynamicMarquee
            currentTranslation={0}
            speed={marquee_speed}
            color={""}
          />
          <DynamicMarquee
            currentTranslation={-100}
            speed={marquee_speed}
            color={""}
          />
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
