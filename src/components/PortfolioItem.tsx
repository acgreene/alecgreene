import React, { useState } from "react";
import { SiGithub } from "react-icons/si";
import { useRecoilState } from "recoil";
import { cursorState } from "../recoil/atoms";
import { Icon, Image, Stack } from "@chakra-ui/react";

type PortfolioItemProps = {
  title: string;
  caption: string;
  description: string;
  technologies: string;
  image: string;
  isImageLeft: boolean;
  githubLink: string;
};

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  title,
  caption,
  description,
  technologies,
  image,
  isImageLeft,
  githubLink,
}) => {
  const [active, setActive] = useRecoilState(cursorState);
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => {
    if (window.innerWidth > 768) {
      setIsHovering(true);
      setActive(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 768) {
      setIsHovering(false);
      setActive(false);
    }
  };
  return (
    <div className="mb-28 sm:mb-36 lg:mb-52">
      {isImageLeft && window.innerWidth > 768 ? (
        <div className="flex flex-col justify-between items-center sm:flex-row md:justify-around">
          <Image
            src={image}
            className="object-contain w-full h-full sm:w-1/2 sm:mr-8"
          ></Image>
          <div className="flex flex-col justify-center mb-8 sm:mb-0">
            <div className="flex flex-row items-center">
              <h1 className="text-2xl font-bold">{title}</h1>
              <a
                href={githubLink}
                target="_blank"
                className="mx-6 cursor-none"
                style={{ zIndex: isHovering ? "30" : "0" }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Icon
                  as={SiGithub}
                  boxSize={6}
                  color={isHovering ? "black" : "white"}
                ></Icon>
              </a>
            </div>
            <span className="text-lg mt-1">{caption}</span>
            <span className="text-md mt-6">{description}</span>
            <span className="text-md mt-6">Technologies: {technologies}.</span>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-between items-center sm:flex-row md:justify-around">
          <div className="flex flex-col justify-center mb-8 sm:mb-0 sm:mr-4">
            <div className="flex flex-row items-center">
              <h1 className="text-2xl font-bold">{title}</h1>
              <a
                href={githubLink}
                target="_blank"
                className="mx-6 cursor-none"
                style={{ zIndex: isHovering ? "30" : "0" }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Icon
                  as={SiGithub}
                  boxSize={6}
                  color={isHovering ? "black" : "white"}
                ></Icon>
              </a>
            </div>
            <span className="text-lg mt-1">{caption}</span>
            <span className="text-md mt-6">{description}</span>
            <span className="text-md mt-6">Technologies: {technologies}.</span>
          </div>
          <Image
            src={image}
            className="object-contain w-full h-full sm:w-1/2"
          ></Image>
        </div>
      )}
    </div>
  );
};
export default PortfolioItem;
