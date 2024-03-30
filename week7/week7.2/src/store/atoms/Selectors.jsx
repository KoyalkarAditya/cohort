import { selector } from "recoil";
import { countAtom } from "./Count";
export const evenSelector = selector({
  key: "evenSelector",
  get: ({ get }) => {
    const count = get(countAtom);
    return count % 2;
  },
});
// we get access to a prop named get ,, inside which we pass the atom name which the selector is depended
//instead of using useMemo and have dependency array ,,in this we are saying anytime the count changes the get function runs
