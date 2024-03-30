import React, { useState } from "react";
import { AllTodos } from "./components/AllTodos";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([
    {
      title: "go to gym",
      description: "lifts weight daily",
    },
    {
      title: "go to library",
      description: "read books",
    },
  ]);
  return (
    <div>
      <input
        type="text"
        placeholder="title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="description"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setTodos([
            ...todos,
            {
              title,
              description,
            },
          ]);
        }}
      >
        Add
      </button>
      <AllTodos todos={todos} />
    </div>
  );
}

export default App;
