import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      title: "go to gym",
      description: "new year resolution",
      completed: false,
    },
    {
      title: "study DSA",
      description: "new year resolution",
      completed: false,
    },
  ]);
  function addTodo() {
    setTodos([
      ...todos,
      {
        title: "added todo",
        description: "kya re howle",
      },
    ]);
  }
  return (
    <div>
      <button onClick={addTodo}>Add todo</button>
      {todos.map((todo) => {
        return <Todo title={todo.title} description={todo.description} />;
      })}
    </div>
  );
}
// renders single todo
function Todo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h4>{props.description}</h4>
    </div>
  );
}
export default App;
