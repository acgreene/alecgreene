import React from "react";
import { useRecoilState } from "recoil";
import { maxScroll, windowScroll } from "../recoil/atoms";

const ProgressBar = () => {
  const [scrollPos, setScrollPos] = useRecoilState(windowScroll);
  const [maxScrollY, setMaxScrollY] = useRecoilState(maxScroll);

  return (
    <div
      className="fixed top-0 left-0 bg-gray-400 w-2 z-40"
      style={{
        height: `${(100 * scrollPos) / maxScrollY}vh`,
        transition: "0.4s ease-out",
      }}
    ></div>
  );
};
export default ProgressBar;
