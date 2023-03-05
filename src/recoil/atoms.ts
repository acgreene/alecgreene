import { atom } from "recoil";

export const cursorState = atom({
  key: "activeState",
  default: false,
});