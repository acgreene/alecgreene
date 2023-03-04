import React from "react";
import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";

interface CursorPosition {
  left: number;
  top: number;
}

const Cursor = () => {
  // initialize reference to cursor and variable to store position
  const cursorRef = useRef<HTMLDivElement>(null);
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
        <div className="absolute bg-slate-50 w-6 h-6 rounded-full"></div>
        <div className="absolute bg-black w-5 h-5 rounded-full"></div>
      </div>
    </>
  );
};

export default Cursor;
