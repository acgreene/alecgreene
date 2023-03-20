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
      <div
        className="
          w-full hidden py-10 top-0 right-0 fixed
          sm:pr-0 sm:justify-center sm:flex
          md:pr-12
          lg:pr-20"
        style={{
          zIndex: "19",
          backgroundColor: `rgb(${scrollPos / 25}, ${scrollPos / 50}, ${
            scrollPos / 10
          })`,
        }}
      ></div>

      {/* laptop nav bar */}
      <ul
        className="
          w-full py-6 top-0 right-0 fixed list-none hidden items-center flex-1 z-30
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

      {/* list of items only for mobile devices */}
      <div className="sm:hidden flex flex-1 justify-end items-center z-30">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        {/* mobile menu */}
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-x1 sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-normal text-[16px]
                    ${
                      index == navLinks.length - 1 ? "mr-0" : "mb-4"
                    } text-white`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default NavBar;
