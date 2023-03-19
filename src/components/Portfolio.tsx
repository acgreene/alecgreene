import React, { useState } from "react";
import { Icon, Image, Stack } from "@chakra-ui/react";
import { ruckusEQ } from "../assets";
import { SiGithub } from "react-icons/si";
import { useRecoilState } from "recoil";
import { cursorState } from "../recoil/atoms";

const Portfolio = () => {
  const [active, setActive] = useRecoilState(cursorState);
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => {
    if (window.innerWidth > 768) {
      setIsHovering(true);
      setActive(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 768) {
      setIsHovering(false);
      setActive(false);
    }
  };
  return (
    <div
      id="portfolio"
      className="mt-10 mb-10 w-full sm:mb-20 md:mb-36 text-white"
    >
      <span className="text-5xl">project portfolio</span>
      <div className="w-100 h-px mt-5 mb-5 bg-white"></div>
      <div className="flex flex-col justify-between items-center sm:flex-row md:justify-around">
        <div className="flex flex-col justify-center mb-8 sm:mb-0 sm:mr-4">
          <div className="flex flex-row items-center">
            <h1 className="text-2xl font-bold">"Ruckus EQ"</h1>
            <a
              href="https://github.com/acgreene/RuckusEQ"
              target="_blank"
              className="mx-6 cursor-none z-30"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Icon
                as={SiGithub}
                boxSize={6}
                color={isHovering ? "black" : "white"}
              ></Icon>
            </a>
          </div>
          <span className="text-lg mt-1">
            Real time audio equalizer software plug-in.
          </span>
          <span className="text-md mt-6">
            Features six bandpass filters, a lowpass filter, and a high pass
            filter. Filters have gui controls to configure parameters including
            frequency, gain, q-factor, and slope.
          </span>
          <span className="text-md mt-6">Technologies: C++, JUCE.</span>
        </div>
        <Image
          src={ruckusEQ}
          className="object-contain w-full h-full sm:w-1/2"
        ></Image>
      </div>
    </div>
  );
};
export default Portfolio;
