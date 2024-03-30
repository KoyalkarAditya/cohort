import axios from "axios";
import { useEffect } from "react";
export function SingleTodo({ id, todo, setTodo }) {
  useEffect(() => {
    axios
      .get(`https://sum-server.100xdevs.com/todo?id=${id}`)
      .then((response) => {
        setTodo(response.data.todo);
      });
  }, [todo]);

  return (
    <>
      <h4>{todo.title}</h4>
      <h6>{todo.description}</h6>
    </>
  );
}
