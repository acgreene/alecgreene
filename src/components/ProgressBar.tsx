import React from "react";
import { useRecoilState } from "recoil";
import { maxScroll, windowScroll } from "../recoil/atoms";

const ProgressBar = () => {
  const [scrollPos, setScrollPos] = useRecoilState(windowScroll);
  const [maxScrollY, setMaxScrollY] = useRecoilState(maxScroll);

  return (
    <div
      className="fixed top-0 left-0 bg-indigo-600 w-px z-40"
      style={{ height: `${(100 * scrollPos) / maxScrollY}vh` }}
    ></div>
  );
};
export default ProgressBar;
