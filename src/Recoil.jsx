import {atom} from "recoil";

export const loginAtom = atom({
  key    : "loginAtom",
  default: false,
});
export const memberIdValue = atom({
  key    : "memberIdValue",
  default: localStorage.getItem("memberId"),
});