import { atomFamily, selectorFamily } from "recoil";
import axios from "axios";
export const todosAtomFamily = atomFamily({
  key: "todosAtomFamily",
  default: selectorFamily({
    key: "todoSelectorFamily",
    get:
      (id) =>
      async ({ get }) => {
        const res = await axios.get(
          `https://sum-server.100xdevs.com/todo?id=${id}`
        );
        return res.data.todo;
      },
  }),
});
//if you are using a atom family use selectorFamily to select a particular todo otherwise for each atom the selector will be same
//selectorFamily returns a function
// export const todosAtomFamily = atomFamily({
//   key: "todosAtomFamily",
//   default: selectorFamily({
//     key: "todoSelectorFamily",
//     get: function (id) {
//       return async function () {
//         const res = await axios.get(
//           `https://sum-server.100xdevs.com/todos?id=${id}`
//         );
//         return res.data.todo;
//       };
//     },
//   }),
// });
