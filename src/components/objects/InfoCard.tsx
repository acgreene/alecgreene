/*  
    --- ExpertiseCard.tsx ---
    Copyright © 2023 Alec Greene - All Rights Reserved.
    Author: Alec Greene

    About: 
        A card with a title and bullet points. Animates on click. 

    TO DO: 
        * 
*/

import { Icon } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { BsArrowReturnRight } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";
import { useRecoilState } from "recoil";
import { windowScroll, windowScrollCenterY } from "../../recoil/atoms";

type InfoCardProps = {
  title: string;
  subtitles: string[];
};

const InfoCard: React.FC<InfoCardProps> = ({ title, subtitles }) => {
  // references
  const infoCardRef = useRef<HTMLDivElement>(null);

  // local states
  const [toggle, setToggle] = useState<Boolean>(false);
  const [highlight, setHighlight] = useState<Boolean>(false);
  const [infoCardTop, setInfoCardTop] = useState<number>(0);
  const [infoCardBottom, setInfoCardBottom] = useState<number>(0);

  // recoil
  const [scrollPos] = useRecoilState(windowScroll);
  const [centerY] = useRecoilState(windowScrollCenterY);

  function handleClick() {
    if (toggle == false) {
      setHighlight(true);
    } else {
      setHighlight(false);
    }
    setToggle(!toggle);
  }

  useEffect(() => {
    if (infoCardRef.current) {
      setInfoCardTop(
        infoCardRef.current.getBoundingClientRect().top + scrollPos
      );
      setInfoCardBottom(
        infoCardRef.current.getBoundingClientRect().bottom + scrollPos
      );
    }
  }, []);

  useEffect(() => {
    if (!toggle) {
      if (centerY > infoCardTop && centerY < infoCardBottom + 150) {
        setHighlight(true);
      } else {
        setHighlight(false);
      }
    }
  }, [scrollPos]);

  return (
    <div
      className={`flex flex-col w-full my-4 justify-start items-start ${
        highlight ? "bg-indigo-400" : "bg-neutral-900"
      } 
      ease-out duration-300 h-[275px] lg:h-[375px]`}
      onClick={handleClick}
      style={{
        transform: `${
          toggle
            ? "translateY(-50%) rotateX(-5deg) scale(1.05)"
            : "translateY(0px) rotateX(-10deg) scale(1)"
        } `,
        transformOrigin: "50% 45% -30px",
        boxShadow: "-3px -25px 53px 0px rgba(61,61,61,0.26)",
      }}
    >
      <div className="flex flex-row items-center" ref={infoCardRef}>
        <h1
          className={`text-3xl my-4 ml-6 relative xxs:text-4xl lg:text-6xl lg:my-8 lg:ml-12 ${
            highlight ? "text-black" : "text-indigo-500"
          }`}
        >
          {title}
        </h1>
        <div className="right-0 top-0 flex absolute mr-5 mt-6 ease-out items-center justify-center">
          <div
            className={`absolute w-[125%] h-[125%] ${
              highlight ? "bg-neutral-700" : "bg-indigo-400"
            } opacity-10 z-0 rounded-lg`}
          ></div>
          <Icon
            as={toggle ? IoIosArrowBack : IoIosArrowDown}
            boxSize={5}
            color={highlight ? "black" : "white"}
            className="z-10"
          />
        </div>
      </div>

      <ul>
        {subtitles.map((subtitle, index) => (
          <li
            key={index}
            className={`${
              toggle ? "flex" : "hidden"
            } text-neutral-900 ml-6 flex-col lg:ml-12`}
          >
            <div className="flex flex-row justify-start items-center text-md xxs:text-xl font-secondary font-light lg:text-3xl">
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
