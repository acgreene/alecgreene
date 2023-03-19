import { Flex, SimpleGrid, Stack } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { cursorState, windowScroll } from "../recoil/atoms";
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
import { useEffect } from "react";
import ExplorationCard from "./ExplorationCard";

const About = () => {
  return (
    <div
      id="about"
      className="flex justify-center items-center h-100 flex-row flex-wrap sm:mb-20 mb-6 text-white"
    >
      <div className="mt-10 mb-10 sm:mb-80 md:mb-96">
        <p
          className="
        font-thin text-5xl
        sm:text-center
        md:text-left
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

      <div className="mt-10 mb-10 w-full sm:mb-20 md:mb-36">
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

      <div className="mt-10 mb-10 w-full sm:mb-80 md:mb-96">
        <span className="text-5xl">education & experience</span>
        <div className="w-100 h-px mt-5 mb-5 bg-white"></div>
        <div className="flex xs:flex-col sm:flex-row justify-between md:justify-around">
          <div className="flex flex-col">
            <h1 className="text-xl">EDUCATION</h1>
            <div className="flex flex-row my-4">
              <div className="relative flex flex-col items-center mr-4 mt-1">
                <div className="flex items-center justify-center h-4 w-4 rounded-full bg-white z-10"></div>
                <div
                  className="absolute w-px bg-white"
                  style={{ height: "72px" }}
                ></div>
              </div>
              <span className="mr-8 w-24">2016-2022</span>
              <div>
                <h2>University of Michigan</h2>
                <h2>B.S.E. Electrical Engineering</h2>
              </div>
            </div>
            <div className="flex flex-row my-4">
              <div className="relative flex flex-col items-center mr-4 mt-1">
                <div className="flex items-center justify-center h-4 w-4 rounded-full bg-white z-10">
                  <div
                    className="rounded-full bg-black"
                    style={{ width: "14px", height: "14px" }}
                  ></div>
                </div>
              </div>
              <span className="mr-8 w-24">2016-2022</span>
              <div>
                <h2>University of Michigan</h2>
                <h2>B.S Sound Engineering</h2>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl">EXPERIENCE</h1>
            <div className="flex flex-row my-4">
              <div className="relative flex flex-col items-center mr-4 mt-1">
                <div className="flex items-center justify-center h-4 w-4 rounded-full bg-white z-10"></div>
                <div
                  className="absolute w-px bg-white"
                  style={{ height: "94px" }}
                ></div>
              </div>
              <span className="mr-8 w-24">2023-Present</span>
              <div>
                <h2>DSP Test Engineer I</h2>
                <h2>Shure Incorporated</h2>
                <span>Chicago, IL</span>
              </div>
            </div>
            <div className="flex flex-row my-4">
              <div className="relative flex flex-col items-center mr-4 mt-1">
                <div className="flex items-center justify-center h-4 w-4 rounded-full bg-white z-10">
                  <div
                    className="rounded-full bg-black"
                    style={{ width: "14px", height: "14px" }}
                  ></div>
                </div>
                <div
                  className="absolute w-px bg-white"
                  style={{ height: "94px" }}
                ></div>
              </div>
              <span className="mr-8 w-24">2023-Present</span>
              <div>
                <h2>Hardware & Software Engineer</h2>
                <h2>Area (startup)</h2>
                <span>Remote</span>
              </div>
            </div>
            <div className="flex flex-row my-4">
              <div className="relative flex flex-col items-center mr-4 mt-1">
                <div className="flex items-center justify-center h-4 w-4 rounded-full bg-white z-10">
                  <div
                    className="rounded-full bg-black"
                    style={{ width: "14px", height: "14px" }}
                  ></div>
                </div>
                <div
                  className="absolute w-px bg-white"
                  style={{ height: "94px" }}
                ></div>
              </div>
              <span className="mr-8 w-24">2022</span>
              <div>
                <h2>Applications Engineering Intern</h2>
                <h2>Texas Instruments</h2>
                <span>Dallas, TX</span>
              </div>
            </div>
            <div className="flex flex-row my-4">
              <div className="relative flex flex-col items-center mr-4 mt-1">
                <div className="flex items-center justify-center h-4 w-4 rounded-full bg-white z-10">
                  <div
                    className="rounded-full bg-black"
                    style={{ width: "14px", height: "14px" }}
                  ></div>
                </div>
                <div
                  className="absolute w-px bg-white"
                  style={{ height: "94px" }}
                ></div>
              </div>
              <span className="mr-8 w-24">2020-2023</span>
              <div>
                <h2>Technology Consultant</h2>
                <h2>University of Michigan</h2>
                <span>Ann Arbor, MI</span>
              </div>
            </div>
            <div className="flex flex-row my-4">
              <div className="relative flex flex-col items-center mr-4 mt-1">
                <div className="flex items-center justify-center h-4 w-4 rounded-full bg-white z-10">
                  <div
                    className="rounded-full bg-black"
                    style={{ width: "14px", height: "14px" }}
                  ></div>
                </div>
              </div>
              <span className="mr-8 w-24">2019-2020</span>
              <div>
                <h2>Live Sound Engineer, Stagehand</h2>
                <h2>Pegasus Entertainment</h2>
                <span>Detroit, MI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
