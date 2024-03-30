import { useEffect, useState } from "react";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/todos").then(async (data) => {
      const json = await data.json();
      setTodos(json.todos);
    });
  }, []);

  return (
    <div>
      <CreateTodo todos={todos} setTodos={setTodos} />;
      <Todos todos={todos} setTodos={setTodos} />
    </div>
  );
}
export default App;
