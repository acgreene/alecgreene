import { Divider } from "@chakra-ui/react";
import React, { useState } from "react";

type ExpertiseCardProps = {
  title: string;
  subtitles: string[];
};

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({ title, subtitles }) => {
  const [toggle, setToggle] = useState<Boolean>(false);
  return (
    <div
      className={`flex flex-col w-full justify-center items-start border-t border-l border-r border-white ${
        toggle ? "bg-indigo-500" : "bg-black"
      } ease-in-out duration-300`}
      onClick={() => setToggle((prev) => !prev)}
      style={{
        transform: `${toggle ? "translateY(-75px)" : "translateY(0px)"}`,
        boxShadow: "-3px -25px 53px 0px rgba(61,61,61,0.26)",
      }}
    >
      <h1
        className={`text-5xl my-6 ${toggle ? "text-black" : "text-indigo-500"}`}
      >
        {title}
      </h1>
      <ul>
        {subtitles.map((subtitle, index) => (
          <li
            key={index}
            className={`text-black ${toggle ? "flex" : "display-none"}`}
          >
            {subtitle}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ExpertiseCard;
