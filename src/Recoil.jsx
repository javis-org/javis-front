import { atom, selector } from "recoil";
import { client } from "./api";

export const loginAtom = atom({
  key: "loginAtom",
  default: false,
});
export const memberIdValue = atom({
  key: "memberIdValue",
  default: localStorage.getItem("memberId"),
});

export const selfIntroductionList = selector({
  key: "selfIntroductionList",
  get: async ({ get }) => {
    try {
      const memberId = get(memberIdValue); // memberIdValue atom에서 값을 가져옴
      const response = await client.get(`jobPostings?memberId=${memberId}`);
      return response.data;
    } catch (error) {
      console.log(error.response.data.message);
    }
  },
});
