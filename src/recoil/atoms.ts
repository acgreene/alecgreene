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