import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import {
  cursorState,
  maxScroll,
  windowScroll,
  windowScrollVelocity,
} from "../recoil/atoms";
import { menu, close } from "../assets";
import { navLinks } from "../constants";

const NavBar = () => {
  const [toggle, setToggle] = useState<Boolean>(false);

  let fontSize = "text-[22px]";

  // recoil
  const [active, setActive] = useRecoilState(cursorState);
  const [scrollPos, setScrollPos] = useRecoilState(windowScroll);
  const [scrollVel, setScrollVel] = useRecoilState(windowScrollVelocity);
  const [lastScrollTime, setLastScrollTime] = useState<number>(Date.now());
  const [lastScrollPos, setLastScrollPos] = useState<number>(scrollPos);
  const [maxScrollY, setMaxScrollY] = useRecoilState(maxScroll);
  const [scrollTimeout, setScrollTimeout] = useState<any>(null);

  useEffect(() => {
    function handleScroll() {
      const maxScrollY = document.body.scrollHeight - window.innerHeight;
      setMaxScrollY(maxScrollY);

      setScrollPos(window.scrollY);
      const currScrollTime: number = Date.now();

      const deltaTime = currScrollTime - lastScrollTime;
      const deltaPos = scrollPos - lastScrollPos;
      setScrollVel(deltaPos / deltaTime);

      setLastScrollTime(Date.now());
      setLastScrollPos(window.scrollY);

      // ui error handling
      if (window.scrollY === 0 || window.scrollY > maxScrollY - 100) {
        setScrollVel(0);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPos]);

  useEffect(() => {
    const handleScrollStop = () => {
      clearTimeout(scrollTimeout);
      setScrollTimeout(
        setTimeout(() => {
          setScrollVel(0);
        }, 10)
      );
    };
    window.addEventListener("scroll", handleScrollStop);
    return () => {
      window.removeEventListener("scroll", handleScrollStop);
    };
  }, [scrollTimeout]);

  return (
    <>
      {/* laptop */}
      <div
        className="
          w-full hidden py-10 top-0 right-0
          sm:pr-0 sm:justify-center sm:flex
          md:pr-12
          lg:pr-20"
        style={{
          zIndex: "19",
          backgroundColor: `rgb(${scrollPos / 25}, ${scrollPos / 50}, ${
            scrollPos / 10
          })`,
        }}
      >
        <ul
          className="
          w-full top-0 right-0 list-none hidden items-center flex-1 z-30
          sm:pr-0 sm:justify-center sm:flex
          md:pr-20 md:justify-end"
        >
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-normal ${fontSize}
              ${index == navLinks.length - 1 ? "mr-0" : "mr-10"} text-white`}
              onMouseEnter={() => setActive(true)}
              onMouseLeave={() => setActive(false)}
            >
              <a href={`#${nav.id}`} className="cursor-none relative">
                {nav.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* mobile */}
      <div
        className={`${
          toggle ? "translate-x-0" : "translate-x-full"
        } w-7/12 h-full right-0 flex z-40 fixed sm:hidden duration-500 ease-in-out`}
      >
        {/* menu */}
        <div
          className={`flex bg-indigo-500 absolute justify-center items-center top-0 right-0 bottom-0 w-full rounded-x1 sidebar`}
        >
          <ul className="list-none flex flex-col w-full">
            {navLinks.map((nav, index) => (
              <div className="w-full h-8 my-8" key={nav.id}>
                {/* <div className="w-100 h-px bg-white"></div> */}
                <li
                  className={`flex justify-center font-normal text-2xl w-full
                    ${
                      index == navLinks.length - 1 ? "mr-0" : "mb-4"
                    } text-black`}
                >
                  <a href={`#/${nav.id}`}>{nav.title}</a>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
      {/* toggle icon */}
      <div
        className="flex justify-center items-center w-[54px] h-[54px] fixed sm:hidden z-50 ease-in-out duration-200"
        style={{
          top: `${toggle ? "30px" : "20px"}`,
          right: `${toggle ? "30px" : "20px"}`,
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
    </>
  );
};
export default NavBar;
