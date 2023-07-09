import { Divider, Icon } from "@chakra-ui/react";
import React, { useState } from "react";
import { BsArrowReturnRight } from "react-icons/bs";

type ExpertiseCardProps = {
  title: string;
  subtitles: string[];
};

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({ title, subtitles }) => {
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
      <h1
        className={`text-3xl my-4 ml-6 ${
          toggle ? "text-black" : "text-indigo-500"
        }`}
      >
        {title}
      </h1>
      <ul>
        {subtitles.map((subtitle, index) => (
          <li
            key={index}
            className={`text-neutral-900 ${
              toggle ? "flex" : "display-none"
            } ml-6 flex-col`}
          >
            <div className="flex flex-row justify-start items-center">
              <Icon as={BsArrowReturnRight} boxSize={5} className="mr-2" />
              {subtitle}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ExpertiseCard;
