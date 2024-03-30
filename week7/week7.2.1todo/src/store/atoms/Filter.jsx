import { atom, selector } from "recoil";
import { Todos } from "./Todos";
import { description } from "./Todo";

export const filter = atom({
  key: "filter",
  default: "",
});

//selector
export const filteredTodos = selector({
  key: "filteredTodos",
  get: ({ get }) => {
    const todos = get(Todos);
    const filterValue = get(filter);
    return todos.filter((todo) => {
      return (
        todo.title.includes(filterValue) ||
        todo.description.includes(filterValue)
      );
    });
  },
});
