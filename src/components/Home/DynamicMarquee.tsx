import React, { useRef, useState } from "react";

type DynamicMarqueeProps = {};

const DynamicMarquee: React.FC<DynamicMarqueeProps> = () => {
  const [isMoved, setIsMoved] = useState(false);

  const moveDiv = () => {
    setIsMoved((isMoved) => !isMoved);
  };

  return (
    <div className="flex flex-col">
      <button className="" onClick={moveDiv}>
        Move Div
      </button>
      <div
        className="flex flex-row"
        style={{
          transform: `${isMoved ? "translateX(50%)" : "translateX(0%)"}`,
          transition: "transform 1s linear",
        }}
      >
        <div className="bg-blue-500 h-4 w-screen"></div>
        <div className="bg-red-500 h-4 w-screen"></div>
      </div>
    </div>
  );
};
export default DynamicMarquee;
