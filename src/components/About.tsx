import { SimpleGrid } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { cursorState } from "../recoil/atoms";
import {
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiChakraui,
  SiGreensock,
  SiTsnode,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiMysql,
  SiPython,
  SiCplusplus,
  SiAbletonlive,
  SiProtools,
  SiKicad,
  SiAltiumdesigner,
} from "react-icons/si";
import { useState } from "react";
import ExplorationCard from "./ExplorationCard";

const About = () => {
  const [active, setActive] = useRecoilState(cursorState);

  return (
    <div className="flex justify-center items-center h-100 flex-row flex-wrap sm:mb-20 mb-6 text-white">
      <div className="mt-10 mb-10">
        <p
          className="
        font-thin text-5xl
        sm:text-center mb-80
        md:text-left md:mb-96
        "
        >
          endlessly learning, <br />
          <br />
          inpired through technical and creative mediums, <br />
          <br />
          engineering for work, <br />
          <br />
          and for fun. <br />
          <br />
        </p>
      </div>

      <div className="mt-10 mb-10 w-full">
        <span className="text-5xl">explorations</span>
        <div className="w-100 h-px mt-5 mb-5 bg-white"></div>
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing="40px">
          <ExplorationCard
            title="recording, mixing"
            icons={[SiAbletonlive, SiProtools]}
          ></ExplorationCard>

          <ExplorationCard
            title="front end dev"
            icons={[
              SiTypescript,
              SiReact,
              SiTailwindcss,
              SiChakraui,
              SiGreensock,
            ]}
          ></ExplorationCard>

          <ExplorationCard
            title="scripting"
            icons={[SiPython]}
          ></ExplorationCard>

          <ExplorationCard
            title="schematics, pcbs"
            icons={[SiKicad, SiAltiumdesigner]}
          ></ExplorationCard>

          <ExplorationCard
            title="back end dev"
            icons={[SiTsnode, SiExpress]}
          ></ExplorationCard>

          <ExplorationCard
            title="databases"
            icons={[SiMongodb, SiFirebase, SiMysql]}
          ></ExplorationCard>

          <ExplorationCard
            title="audio plugin dev"
            icons={[SiCplusplus]}
          ></ExplorationCard>
        </SimpleGrid>
      </div>
    </div>
  );
};
export default About;
