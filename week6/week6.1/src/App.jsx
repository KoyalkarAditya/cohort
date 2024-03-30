import React, { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setInterval(() => {
      fetch("https://sum-server.100xdevs.com/todos").then(async (data) => {
        let jsonData = await data.json();
        setTodos(jsonData.todos);
      });
    }, 10000);
  }, []);

  return (
    <div>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <h1>{todo.title}</h1>
            <h5>{todo.description}</h5>
          </div>
        );
      })}
    </div>
  );
}

export default App;
