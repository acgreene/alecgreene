/*  
    --- Menu.tsx ---
    Copyright © 2023 Alec Greene - All Rights Reserved.
    Author: Alec Greene

    About: 
        A navigation menu that holds the links to traverse my website, 
        as well as some of my socials.

    TO DO: 
        * 
*/

import React, { useState } from "react";
import { windowScroll, viewportWidth } from "../../recoil/atoms";
import { useRecoilState } from "recoil";
import { menu, close } from "../../assets";
import { navLinks } from "../../constants";
import { Icon } from "@chakra-ui/react";
import { AiOutlineArrowRight } from "react-icons/ai";
import StaticMarquee from "./StaticMarquee";

type MenuProps = {};

interface StyleObject {
  [key: string]: string;
}

const Menu: React.FC<MenuProps> = () => {
  const [scrollPos] = useRecoilState(windowScroll);
  const [windowWidth] = useRecoilState(viewportWidth);
  const [toggle, setToggle] = useState<Boolean>(false);

  // menu item arrow marquee hover states
  const [hoveredMenuItemID, setHoveredMenuItemID] = useState<string | null>(
    null
  );

  function handleMenuItemClick() {
    setToggle((prev) => !prev);
    window.scrollTo({ top: 0 });
  }

  function handleMenuItemEnter(id: string) {
    setHoveredMenuItemID(id);
  }

  function handleMenuItemLeave() {
    setHoveredMenuItemID(null);
  }

  const scrollPosTrigger: number = 75;

  let menuStyles: StyleObject = {
    height: `${scrollPos > scrollPosTrigger ? "35px" : "150px"}`,
    width: `${scrollPos > scrollPosTrigger ? "55px" : "128px"}`,
    paddingBottom: `${scrollPos > scrollPosTrigger ? "0px" : "40px"}`,
    paddingLeft: `${scrollPos > scrollPosTrigger ? "0px" : "24px"}`,
    paddingRight: `${scrollPos > scrollPosTrigger ? "0px" : "24px"}`,
    top: "20px",
    left: "20px",
  };

  let toggleButtonStyles: StyleObject = {
    top: `20px`,
    right: `20px`,
  };

  // xl screens
  if (windowWidth >= 1200) {
    menuStyles.height = `${scrollPos > scrollPosTrigger ? "75px" : "450px"}`;
    menuStyles.width = `${scrollPos > scrollPosTrigger ? "95px" : "384px"}`;
    menuStyles.top = "100px";
    menuStyles.left = "100px";

    toggleButtonStyles.top = "100px";
    toggleButtonStyles.right = "100px";
  }

  if (toggle == true) {
    menuStyles.height = `95%`;
    menuStyles.width = `90%`;
    menuStyles.flexDirection = `column`;
    menuStyles.paddingBottom = `0px`;
    menuStyles.paddingLeft = `24px`;
    menuStyles.paddingRight = `24px`;
    menuStyles.top = "20px";
    menuStyles.left = "20px";
    menuStyles.top = "20px";
    menuStyles.left = "20px";

    toggleButtonStyles.top = "60px";
    toggleButtonStyles.right = "40px";

    if (windowWidth >= 1200) {
      toggleButtonStyles.top = "175px";
      toggleButtonStyles.right = "225px";
    }
  }

  return (
    <div>
      <div
        className="
          fixed flex bg-indigo-500 text-2xl z-50 ease-in-out duration-500
          lg:text-6xl 
          "
        style={menuStyles}
      >
        <div
          className="w-full h-full flex"
          style={{
            flexDirection: `${scrollPos > scrollPosTrigger ? "row" : "column"}`,
            display: `${toggle ? "none" : "flex"}`,
            marginLeft: `${scrollPos > scrollPosTrigger ? "10px" : "0px"}`,
          }}
        >
          <div
            className="w-full h-1/2 flex"
            style={{
              alignItems: `${
                scrollPos > scrollPosTrigger ? "flex-start" : "flex-end"
              }`,
              justifyContent: `${
                scrollPos > scrollPosTrigger ? "center" : "flex-start"
              }`,
            }}
          >
            <span
              style={{
                fontWeight: `${scrollPos > scrollPosTrigger ? "700" : "400"}`,
              }}
            >
              a
            </span>
            <div
              style={{
                display: `${scrollPos > scrollPosTrigger ? "none" : "flex"}`,
              }}
            >
              <span>l</span>
              <span>e</span>
              <span>c</span>
            </div>
          </div>
          <div
            className="w-full h-1/2 flex justify-start items-start font-bold"
            style={{
              transform: `${
                scrollPos > scrollPosTrigger
                  ? "translateX(0px) translateY(0px)"
                  : "translateX(0px) translateY(-12px)"
              }`,
            }}
          >
            <span>g</span>
            <div
              style={{
                display: `${scrollPos > scrollPosTrigger ? "none" : "flex"}`,
              }}
            >
              <span>r</span>
              <span>e</span>
              <span>e</span>
              <span>n</span>
              <span>e</span>
            </div>
          </div>
        </div>

        {/* menu items */}
        <div
          className={`
            flex justify-center flex-col items-center top-0 bottom-0 right-0
            `}
          style={{
            // display: `${toggle ? "flex" : "none"}`,
            scale: `${toggle ? "1" : "0"}`,
            opacity: `${toggle ? "1" : "0"}`,
            transition: "opacity 1s",
            width: "100%",
            height: "100%",
          }}
        >
          <ul className="list-none flex flex-col w-full">
            {navLinks.map((nav, index) => (
              <div className="w-full h-4 my-4 xxs:h-8 lg:h-20" key={nav.id}>
                <li
                  className={`
                    flex justify-start font-normal text-black text-4xl w-full 
                    xxs:text-5xl
                    lg:justify-center lg:text-8xl
                    ${index == navLinks.length - 1 ? "mr-0" : "mb-4"} `}
                >
                  <div
                    className={`items-center pr-6 hidden ease-in-out duration-200 lg:flex ${
                      hoveredMenuItemID === nav.id
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-0"
                    }`}
                  >
                    <div className="flex rounded-full justify-center items-center bg-black h-[55px] w-[55px] overflow-hidden">
                      <StaticMarquee
                        element={
                          <Icon
                            as={AiOutlineArrowRight}
                            color="white"
                            boxSize={10}
                            className="mx-6"
                          ></Icon>
                        }
                        speed={1.1}
                        direction={false}
                      ></StaticMarquee>
                    </div>
                  </div>

                  <a
                    href={`#/${nav.id}`}
                    onClick={handleMenuItemClick}
                    onMouseEnter={() => handleMenuItemEnter(nav.id)}
                    onMouseLeave={handleMenuItemLeave}
                  >
                    {nav.title}
                  </a>
                </li>
              </div>
            ))}
          </ul>
          <div
            className="
            flex flex-col w-full justify-start pt-8 text-xl font-secondary
            xxs:text-2xl
            lg:text-3xl lg:items-center lg:pl-16"
          >
            <div
              className="underline py-1"
              onClick={() =>
                (window.location.href = "mailto:aleccgreene@gmail.com")
              }
            >
              aleccgreene@gmail.com
            </div>
            <a
              href="https://www.linkedin.com/in/alecgreene/"
              className="underline py-1"
            >
              Linkedin
            </a>
            <a href="hhttps://github.com/acgreene" className="underline py-1">
              Github
            </a>
          </div>
        </div>
      </div>

      {/* toggle button */}
      <div
        className="
          flex justify-center items-center w-[54px] h-[54px] fixed z-50 ease-in-out duration-500 hover:cursor-pointer
              lg:w-[84px] lg:h-[84px]
          "
        style={toggleButtonStyles}
        onClick={() => setToggle((prev) => !prev)}
      >
        <div
          className={`absolute w-full h-full rounded-full ease-in-out duration-300 ${
            toggle ? "bg-black" : "bg-indigo-500"
          } opacity-80`}
        ></div>
        <div
          className={`absolute w-[50px] h-[50px] rounded-full ease-in-out duration-300 ${
            toggle ? "bg-indigo-500" : "bg-black"
          }
          lg:w-[78px] lg:h-[78px]
          `}
        ></div>
        <div
          className="flex absolute w-full h-full items-center justify-center translate-x-[-55px] ease-in-out duration-300 lg:translate-x-[-75px]"
          style={{
            opacity: `${scrollPos > scrollPosTrigger && !toggle ? "0" : "1"}`,
          }}
        >
          <span
            className={`text-md font-bold lg:text-lg ${
              toggle ? "text-black" : "text-indigo-400"
            }`}
          >
            {toggle ? "Close" : "Menu"}
          </span>
        </div>
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="
            absolute w-[22px] h-[22px]
            lg:w-[32px] lg:h-[32px]
            "
          style={{
            filter: `${
              toggle
                ? "invert(100%) sepia(0%) saturate(0%) hue-rotate(326deg) brightness(96%) contrast(104%)"
                : "invert(52%) sepia(86%) saturate(6775%) hue-rotate(239deg) brightness(99%) contrast(105%)"
            }`,
          }}
        />
      </div>
    </div>
  );
};
export default Menu;
