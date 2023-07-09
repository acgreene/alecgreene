import React, { useState } from "react";
import { windowScroll } from "../recoil/atoms";
import { useRecoilState } from "recoil";
import { menu, close } from "../assets";
import { navLinks } from "../constants";

type LogoProps = {};

interface StyleObject {
  [key: string]: string;
}

const Logo: React.FC<LogoProps> = () => {
  const [scrollPos, setScrollPos] = useRecoilState(windowScroll);
  const [toggle, setToggle] = useState<Boolean>(false);

  const scrollPosTrigger = 75;

  const background_notoggle: StyleObject = {
    height: `${scrollPos > scrollPosTrigger ? "35px" : "150px"}`,
    width: `${scrollPos > scrollPosTrigger ? "55px" : "128px"}`,
    paddingBottom: `${scrollPos > scrollPosTrigger ? "0px" : "40px"}`,
    paddingLeft: `${scrollPos > scrollPosTrigger ? "0px" : "24px"}`,
    paddingRight: `${scrollPos > scrollPosTrigger ? "0px" : "24px"}`,
    top: "20px",
    left: "20px",
  };

  const background_toggle: StyleObject = {
    height: `95%`,
    width: `90%`,
    flexDirection: `column`,
    paddingBottom: `0px`,
    paddingLeft: `24px`,
    paddingRight: `24px`,
    top: "20px",
    left: "20px",
    // padding: "40px",
  };

  return (
    <div>
      <div
        className="fixed flex bg-indigo-500 text-2xl z-50 ease-in-out duration-500"
        style={toggle ? background_toggle : background_notoggle}
      >
        <div
          className="w-full h-full flex"
          style={{
            flexDirection: `${scrollPos > scrollPosTrigger ? "row" : "column"}`,
            display: `${toggle ? "none" : "flex"}`,
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
                transform: `${
                  scrollPos > scrollPosTrigger
                    ? "translateX(7px) translateY(0px)"
                    : "translateX(0px) translateY(0px)"
                }`,
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

        <div
          className={`flex justify-center flex-col items-center top-0 bottom-0 right-0 duration-500 ease-in-out`}
          style={{
            display: `${toggle ? "flex" : "none"}`,
            width: "100%",
            height: "100%",
          }}
        >
          <ul className="list-none flex flex-col w-full">
            {navLinks.map((nav, index) => (
              <div className="w-full h-8 my-4" key={nav.id}>
                <li
                  className={`flex justify-start font-normal text-5xl w-full
                    ${
                      index == navLinks.length - 1 ? "mr-0" : "mb-4"
                    } text-black`}
                >
                  <a
                    href={`#/${nav.id}`}
                    onClick={() => setToggle((prev) => !prev)}
                  >
                    {nav.title}
                  </a>
                </li>
              </div>
            ))}
          </ul>
          <div className="flex flex-col w-full justify-start pt-8">
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

      {/* toggle icon */}
      <div
        className="flex justify-center items-center w-[54px] h-[54px] fixed sm:hidden z-50 ease-in-out duration-500"
        style={{
          top: `${toggle ? "60px" : "20px"}`,
          right: `${toggle ? "40px" : "20px"}`,
        }}
      >
        <div
          className={`absolute w-full h-full rounded-full ease-in-out duration-300 ${
            toggle ? "bg-black" : "bg-indigo-500"
          } opacity-80`}
        ></div>
        <div
          className={`absolute w-[50px] h-[50px] rounded-full ease-in-out duration-300 ${
            toggle ? "bg-indigo-500" : "bg-black"
          }`}
        ></div>
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="absolute w-[22px] h-[22px]"
          onClick={() => setToggle((prev) => !prev)}
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
export default Logo;
