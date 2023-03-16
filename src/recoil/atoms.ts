import { atom } from "recoil";

export const cursorState = atom({
  key: "activeState",
  default: false,
});

export const windowScroll = atom({
  key: "windowScroll",
  default: 0,
});