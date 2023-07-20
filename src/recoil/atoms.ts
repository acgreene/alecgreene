/*  
    --- atoms.ts ---
    Copyright © 2023 Alec Greene - All Rights Reserved.
    Author: Alec Greene

    About: 
        * All pieces of state that can be shared and accessed by multiple components.

    TO DO: 
        * 
*/

import { atom } from "recoil";

export const primaryColor = atom({
  key: "primaryColor", 
  default: "amber"
});

export const cursorState = atom({
  key: "activeState",
  default: false,
});

export const windowScroll = atom({
  key: "windowScroll",
  default: 0,
});

export const windowScrollVelocity = atom({
  key: "windowScrollVelocity", 
  default: 0,
});

export const maxScroll = atom({
  key: "maxScroll", 
  default: 0,
});

export const viewportWidth = atom({
  key: "viewportWidth",
  default: window.innerWidth,
})

export const viewportHeight = atom({
  key: "viewportHeight",
  default: window.innerHeight,
})

export const windowScrollCenterY = atom ({
  key: "windowScrollCenterY",
  default: window.innerHeight / 2,
})