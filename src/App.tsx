import React from "react";
import { useRef, useEffect } from "react";

import { gsap } from "gsap";
import Cursor from "./components/Cursor";

function App() {
  return (
    <div className="bg-black overflow-hidden relative top-0 left-0 w-screen h-screen">
      <Cursor />
    </div>
  );
}

export default App;
