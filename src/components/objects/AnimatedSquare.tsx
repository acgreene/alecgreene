import React, { useRef } from "react";
import { useRecoilState } from "recoil";
import { maxScroll, windowScroll } from "../../recoil/atoms";

type AnimatedSquareProps = {
  rgb: string;
  opacity: number;
  size: number;
  rotationConstant: number;
  translationXConstant: number;
  translationYConstant: number;
  top: number;
  left: number;
};

const AnimatedSquare: React.FC<AnimatedSquareProps> = ({
  rgb,
  opacity,
  size,
  rotationConstant,
  translationXConstant,
  translationYConstant,
  top,
  left,
}) => {
  const [scrollPos] = useRecoilState(windowScroll);
  const [maxScrollY] = useRecoilState(maxScroll);

  const scrollRatio = scrollPos / maxScrollY;

  return (
    <div
      className={`fixed bottom-0 z-0 ease-out duration-300`}
      style={{
        backgroundColor: `${rgb}`,
        opacity: `${opacity}`,
        top: `${top}%`,
        left: `${left}%`,
        transform: `rotate(${
          scrollRatio * 360 * rotationConstant
        }deg) translate(${scrollPos * translationXConstant}px, ${
          scrollPos * translationYConstant
        }px)`,
        width: `${40 * size}px`,
        height: `${40 * size}px`,
      }}
    ></div>
  );
};
export default AnimatedSquare;
