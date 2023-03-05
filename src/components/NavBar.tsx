import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { cursorState } from "../recoil/atoms";
import { menu, close } from "../assets";
import { navLinks } from "../constants";

const NavBar = () => {
  const [toggle, setToggle] = useState<Boolean>(false);

  // recoil
  const [active, setActive] = useRecoilState(cursorState);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar z-30">
      {/* laptop nav bar */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-normal text-[16px] z-30
              ${index == navLinks.length - 1 ? "mr-0" : "mr-10"} text-white`}
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
          >
            <a href={`#${nav.id}`} className="cursor-none">
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      {/* list of items only for mobile devices */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
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
                className={`font-normal text-[16px] z-40
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
    </nav>
  );
};
export default NavBar;
