import { memo, useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";
import "./App.css";

function useTodos() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todos").then((response) => {
      setTodos(response.data.todos);
    });
  }, []);
  return todos;
}
function App() {
  const todos = useTodos();
  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h4>{todo.title}</h4>
          <h6>{todo.description}</h6>
        </div>
      ))}
    </>
  );
}

export default App;
