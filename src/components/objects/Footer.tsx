/*  
    --- Footer.tsx ---
    Copyright © 2023 Alec Greene - All Rights Reserved.
    Author: Alec Greene

    About: 
      The bottom section on every web page. 

    TO DO: 
        * 
*/

import React from "react";
import StaticMarquee from "./StaticMarquee";
import WireframeGlobe from "./WireframeGlobe/WireframeGlobe";

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className="flex flex-col w-full h-[600px] text-indigo-500 text-lg z-30">
      <div className="flex flex-row w-full h-2/5 border-t-2 border-indigo-500 bg-black z-30">
        <div
          className="
          flex flex-col w-2/3 h-full 
          lg:justify-center lg:items-center lg:flex-row-reverse"
        >
          <div className="w-full h-2/3 justify-center items-center flex pb-24 lg:scale-[2] lg:w-1/4">
            <WireframeGlobe />
          </div>

          <div className="w-full h-1/3 justify-center items-start flex flex-col px-8 pb-2 text-sm xxs:text-xl lg:text-4xl lg:w-1/3">
            <span className="text-center w-full">Based in Chicago.</span>
            <span className="text-center w-full">Active worldwide.</span>
          </div>
        </div>
        <div className="flex flex-col w-1/3 h-full border-l-2 border-indigo-500 justify-center items-center text-xl lg:text-4xl">
          <div className="h-1/2 w-full justify-center items-center flex">
            <a
              href="https://www.linkedin.com/in/alecgreene/"
              className="underline text-center"
            >
              Linkedin
            </a>
          </div>
          <div className="h-1/2 w-full border-t-2 border-indigo-500 justify-center items-center flex lg:text-4xl">
            <a
              href="https://github.com/acgreene"
              className="underline text-center \"
            >
              Github
            </a>
          </div>
        </div>
      </div>
      <div className="flex w-full h-2/5 border-t-2 border-indigo-500 items-center justify-center bg-black z-30">
        <StaticMarquee
          element={
            <div
              className="flex shrink-0 text-7xl font-light lg:text-[152px]"
              onClick={() =>
                (window.location.href = "mailto:aleccgreene@gmail.com")
              }
            >
              <div className="px-2">
                <span className="px-1">aleccgreene@gmail.com</span>
              </div>
            </div>
          }
          speed={12}
          direction={true}
        ></StaticMarquee>
      </div>
      <div className="flex w-full h-1/5 items-center justify-center border-t-2 border-indigo-500 bg-black z-30 text-xl lg:text-2xl">
        2023 © Alec Greene
      </div>
    </div>
  );
};
export default Footer;
