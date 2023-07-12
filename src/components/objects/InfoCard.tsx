/*  
    --- ExpertiseCard.tsx ---
    Copyright © 2023 Alec Greene - All Rights Reserved.
    Author: Alec Greene

    About: 
        A card with a title and bullet points. Animates on click. 

    TO DO: 
        * 
*/

import { Icon, background } from "@chakra-ui/react";
import React, { useState } from "react";
import { BsArrowReturnRight } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";

type InfoCardProps = {
  title: string;
  subtitles: string[];
};

const InfoCard: React.FC<InfoCardProps> = ({ title, subtitles }) => {
  const [toggle, setToggle] = useState<Boolean>(false);
  return (
    <div
      className={`flex flex-col w-full my-4 justify-start items-start ${
        toggle ? "bg-indigo-400" : "bg-neutral-900"
      } ease-out duration-300`}
      onClick={() => setToggle((prev) => !prev)}
      style={{
        transform: `${
          toggle
            ? "translateY(-50%) rotateX(-5deg) scale(1.05)"
            : "translateY(0px) rotateX(-10deg) scale(1)"
        } `,
        transformOrigin: "50% 45% -30px",
        boxShadow: "-3px -25px 53px 0px rgba(61,61,61,0.26)",
        height: "275px",
      }}
    >
      <div className="flex flex-row items-center">
        <h1
          className={`text-4xl my-4 ml-6 relative ${
            toggle ? "text-black" : "text-indigo-500"
          }`}
        >
          {title}
        </h1>
        <div className="right-0 top-0 flex absolute mr-5 mt-6 ease-out items-center justify-center">
          <div
            className={`absolute w-[125%] h-[125%] ${
              toggle ? "bg-neutral-700" : "bg-indigo-400"
            } opacity-10 z-0 rounded-lg`}
          ></div>
          <Icon
            as={toggle ? IoIosArrowBack : IoIosArrowDown}
            boxSize={5}
            color={toggle ? "black" : "white"}
            className="z-10"
          />
        </div>
      </div>

      <ul>
        {subtitles.map((subtitle, index) => (
          <li
            key={index}
            className={`text-neutral-900 ${
              toggle ? "flex" : "display-none"
            } ml-6 flex-col`}
          >
            <div className="flex flex-row justify-start items-center text-xl">
              <Icon as={BsArrowReturnRight} boxSize={5} className="mr-2" />
              {subtitle}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default InfoCard;
