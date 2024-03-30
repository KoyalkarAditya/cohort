import { useEffect, useState } from "react";
import axios from "axios";
import { Todos } from "./Todos";
import { SingleTodo } from "./SingleTodo";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({});
  const [id, setId] = useState(1);
  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todos").then((response) => {
      setTodos(response.data.todos);
    });
  }, []);
  return (
    <>
      <button
        onClick={() => {
          setId(1);
        }}
      >
        1
      </button>
      <button
        onClick={() => {
          setId(2);
        }}
      >
        2
      </button>
      <button
        onClick={() => {
          setId(3);
        }}
      >
        3
      </button>
      <button
        onClick={() => {
          setId(4);
        }}
      >
        4
      </button>

      {/* {todos.map((todo) => (
        <Todos
          key={todo.id}
          title={todo.title}
          description={todo.description}
        ></Todos>
      ))} */}

      <SingleTodo id={id} todo={todo} setTodo={setTodo} />
    </>
  );
}

export default App;
