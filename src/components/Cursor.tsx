import React from "react";
import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { useRecoilValue } from "recoil";
import { cursorState } from "../recoil/atoms";

interface CursorPosition {
  left: number;
  top: number;
}

const Cursor = () => {
  // references to DOM objects for GSAP
  const cursorRef = useRef<HTMLDivElement>(null);
  const outerCircleRef = useRef<HTMLDivElement>(null);
  const innerCircleRef = useRef<HTMLDivElement>(null);
  const centerCircleRef = useRef<HTMLDivElement>(null);

  // TO DO: read whether cursor is in active state from recoil.
  const isCursorActive = useRecoilValue(cursorState);

  // states to store cursor movement
  const [cursorPos, setCursorPos] = useState<CursorPosition>({
    left: 0,
    top: 0,
  });

  useEffect(() => {
    const handleCursorMove = (e: any) => {
      setCursorPos({
        left: e.clientX,
        top: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleCursorMove);

    return () => {
      window.removeEventListener("mousemove", handleCursorMove);
    };
  }, []);

  useEffect(() => {
    // overall cursor movement
    gsap.to(cursorRef.current, {
      left: cursorPos.left,
      top: cursorPos.top,
    });

    // outer ring color change
    gsap.to(outerCircleRef.current, {
      backgroundColor: `rgb(${cursorPos.left / 3}, ${
        cursorPos.top / 2
      }, ${255})`,
    });

    // inner circle blow up
    if (isCursorActive) {
      gsap.to(innerCircleRef.current, {
        height: "0px",
        width: "0px",
      });
      gsap.to(outerCircleRef.current, {
        height: "72px",
        width: "72px",
      });
      gsap.to(centerCircleRef.current, {
        backgroundColor: "rgb(0 0 0)",
        opacity: 0,
      });
    } else {
      gsap.to(innerCircleRef.current, {
        height: "36px",
        width: "36px",
      });
      gsap.to(outerCircleRef.current, {
        height: "40px",
        width: "40px",
      });
      gsap.to(centerCircleRef.current, {
        backgroundColor: "rgb(248 250 252)",
        opacity: 1,
      });
    }
  }, [cursorPos]);

  return (
    <div className="z-10">
      <div
        className={`absolute items-center justify-center hidden sm:flex z-10`}
        style={{ left: cursorPos.left, top: cursorPos.top }}
      >
        <div
          className="absolute h-2 w-2 rounded-full"
          ref={centerCircleRef}
        ></div>
      </div>

      <div
        className={`absolute items-center justify-center hidden sm:flex z-0`}
        ref={cursorRef}
      >
        <div className="absolute rounded-full" ref={outerCircleRef}></div>
        <div
          className="absolute bg-black rounded-full"
          ref={innerCircleRef}
        ></div>
      </div>
    </div>
  );
};

export default Cursor;
