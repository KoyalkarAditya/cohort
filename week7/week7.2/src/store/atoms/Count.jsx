import { atom } from "recoil";

export const countAtom = atom({
  key: "countAtom", //keys are used to uniquely identify a atom and we have to make sure we don't have two atoms with same key
  default: 0,
});
