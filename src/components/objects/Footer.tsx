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
    <div className="flex flex-col w-full h-[420px] text-indigo-500 text-lg">
      <div className="flex flex-row w-full h-2/5 border-t-2 border-indigo-500">
        <div className="flex flex-col w-2/3 h-full">
          <div className="w-full h-1/2 justify-start pl-16 items-start flex">
            <WireframeGlobe />
          </div>

          <div className="w-full h-1/2 justify-start items-start flex px-8">
            Based in Chicago. Active worldwide.
          </div>
        </div>
        <div className="flex flex-col w-1/3 h-full border-l-2 border-indigo-500 justify-center items-center">
          <div className="h-1/2 w-full justify-center items-center flex">
            <a
              href="https://www.linkedin.com/in/alecgreene/"
              className="underline text-center"
            >
              Linkedin
            </a>
          </div>
          <div className="h-1/2 w-full border-t-2 border-indigo-500 justify-center items-center flex">
            <a
              href="https://github.com/acgreene"
              className="underline text-center \"
            >
              Github
            </a>
          </div>
        </div>
      </div>
      <div className="flex w-full h-2/5 border-t-2 border-indigo-500 items-center justify-center">
        <StaticMarquee
          element={
            <div className="flex shrink-0 text-7xl font-light">
              <div className="px-2">
                <span className="px-1">aleccgreene@gmail.com</span>
              </div>
            </div>
          }
          speed={12}
          direction={true}
        ></StaticMarquee>
      </div>
      <div className="flex w-full h-1/5 items-center justify-center border-t-2 border-indigo-500">
        2023 © Alec Greene
      </div>
    </div>
  );
};
export default Footer;
