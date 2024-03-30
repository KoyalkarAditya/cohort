import { Todo } from "./Todo";

export function AllTodos({ todos }) {
  return (
    <>
      {todos.map((todo, index) => {
        return <Todo key={index} todo={todo} />;
      })}
    </>
  );
}
