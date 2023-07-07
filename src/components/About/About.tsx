import { Flex, SimpleGrid, Stack } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { cursorState, windowScroll } from "../../recoil/atoms";
import { useEffect } from "react";
import EducationExperience from "./EducationExperience";
import Explorations from "../Explorations/Explorations";

const About = () => {
  return (
    <div
      id="about"
      className="flex justify-center items-center h-100 flex-row flex-wrap sm:mb-20 mb-6 text-white"
    >
      <div className="mb-10 w-full sm:mb-20 md:mb-36">
        <span className="text-5xl">explorations</span>
        <div className="w-100 h-px mt-5 mb-5 bg-white"></div>
        <Explorations></Explorations>
      </div>
      <EducationExperience></EducationExperience>
    </div>
  );
};
export default About;
