import { useState } from "react";

export function CreateTodo({ todos, setTodos }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div>
      <input
        style={{
          padding: 10,
          margin: 10,
        }}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        type="text"
        placeholder="title"
      />{" "}
      <br />
      <input
        style={{
          padding: 10,
          margin: 10,
        }}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        type="text"
        placeholder="description"
      />
      <br />
      <button
        style={{
          padding: 10,
          margin: 10,
        }}
        onClick={async () => {
          await fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description,
              completed: false,
            }),
            headers: {
              "Content-type": "application/json",
            },
          }).then(async (res) => {
            fetch("http://localhost:3000/todos").then(async (data) => {
              const json = await data.json();
              setTodos(json.todos);
            });
            const json = await res.json();
            alert("todo added" + json.msg);
          });
        }}
      >
        Add a Todo
      </button>
    </div>
  );
}
