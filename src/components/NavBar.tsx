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
        } w-7/12 h-full right-0 flex z-40 fixed sm:hidden duration-500 ease-out`}
      >
        {/* menu */}
        <div
          className={`flex bg-black absolute justify-center items-center top-0 right-0 bottom-0 w-full rounded-x1 sidebar`}
        >
          <ul className="list-none flex flex-col w-full">
            {navLinks.map((nav, index) => (
              <div className="w-full h-20 my-10">
                {/* <div className="w-100 h-px bg-white"></div> */}
                <li
                  key={nav.id}
                  className={`flex justify-center font-normal text-2xl w-full
                    ${
                      index == navLinks.length - 1 ? "mr-0" : "mb-4"
                    } text-white`}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
      {/* toggle icon */}
      <img
        src={toggle ? close : menu}
        alt="menu"
        className="w-[28px] h-[28px] top-0 right-0 z-50 fixed sm:hidden"
        onClick={() => setToggle((prev) => !prev)}
      />
    </>
  );
};
export default NavBar;
