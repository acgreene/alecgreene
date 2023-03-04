import React from "react";
import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";

interface CursorPosition {
  left: number;
  top: number;
}

const Cursor = () => {
  // references to DOM objects for GSAP
  const cursorRef = useRef<HTMLDivElement>(null);
  const outerCircleRef = useRef<HTMLDivElement>(null);

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
    gsap.to(cursorRef.current, {
      left: cursorPos.left,
      top: cursorPos.top,
    });
  }, [cursorPos]);

  useEffect(() => {
    gsap.to(outerCircleRef.current, {
      backgroundColor: `rgb(${cursorPos.left / 3}, ${
        cursorPos.top / 2
      }, ${255})`,
    });
  });

  return (
    <>
      <div
        className={`absolute items-center justify-center hidden sm:flex z-10`}
        style={{ left: cursorPos.left, top: cursorPos.top }}
      >
        <div className="absolute bg-slate-50 w-1 h-1 rounded-full"></div>
      </div>

      <div
        className={`absolute items-center justify-center hidden sm:flex z-0`}
        ref={cursorRef}
      >
        <div
          className="absolute w-8 h-8 rounded-full"
          ref={outerCircleRef}
        ></div>
        <div className="absolute bg-black w-7 h-7 rounded-full"></div>
      </div>
    </>
  );
};

export default Cursor;
