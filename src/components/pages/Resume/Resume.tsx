/*  
    --- Resume.tsx ---
    Copyright © 2023 Alec Greene - All Rights Reserved.
    Author: Alec Greene

    About: 
        My virtual resume.

    TO DO: 
        * 
*/

import { BsFiletypePdf } from "react-icons/bs";
import EducationExperience from "./EducationExperience";
import { Icon } from "@chakra-ui/react";

const Resume = () => {
  function handlePDF() {
    const url =
      "https://drive.google.com/file/d/1-dZ4fB7Gc6O22ve__g7PacBbk2Mtx_G9/view?usp=sharing";
    const link = document.createElement("a");
    link.href = url;
    link.download = "alecgreene.pdf";
    link.click();
  }

  return (
    <div
      id="resume"
      className="
      flex w-full h-full pt-[200px] justify-center items-center flex-row flex-wrap mb-6 text-white scale-[0.9]
      xxs:scale-[1]
      lg:pl-[500px] lg:pr-[175px]"
    >
      <div
        className="flex relative w-full justify-center items-center p-2 m-2 hover:cursor-pointer"
        onClick={handlePDF}
      >
        <div className="flex flex-row w-full h-full justify-center items-center z-10">
          <Icon
            as={BsFiletypePdf}
            boxSize={6}
            color="red"
            className="mr-4"
          ></Icon>
          <span className="text-xl">PDF Copy</span>
        </div>
        <div className="absolute w-full h-full bg-blue-100 opacity-20 z-0 rounded-xl"></div>
      </div>
      <div className="mb-10 w-full">
        <span className="text-5xl">summary</span>
        <div className="w-100 h-px mt-5 mb-5 bg-white"></div>
        <div className="w-full h-full justify-between">
          <div className="my-2">
            <span className="text-xl xl:text-2xl">ABOUT</span>
            <div className="my-4 ml-4">
              <span className="xl:text-2xl">
                I am an engineer with 2 years of industry experience and
                expertise in software and sound. I write full-stack web
                applications, JUCE audio plug-ins, and automation programs.
              </span>
            </div>
          </div>
          <div className="">
            <span className="text-xl xl:text-2xl">SKILLS</span>
            <div className="my-4 ml-4">
              <div className="flex flex-row justify-around items-center xl:text-2xl">
                <ul>
                  <li>C++</li>
                  <li>Python</li>
                  <li>Swift</li>
                </ul>
                <ul>
                  <li>React</li>
                  <li>Typescript</li>
                  <li>CSS</li>
                </ul>
                <ul>
                  <li>DSP</li>
                  <li>Sound Recording</li>
                  <li>Audio Mixing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <EducationExperience></EducationExperience>
    </div>
  );
};
export default Resume;
