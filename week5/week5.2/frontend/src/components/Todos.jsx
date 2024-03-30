export function Todos({ todos, setTodos }) {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div key={todo._id}>
            <h1>{todo.title}</h1>
            <h3>{todo.description}</h3>
            <button
              onClick={async () => {
                const id = todo._id;
                await fetch("http://localhost:3000/completed", {
                  method: "PUT",
                  body: JSON.stringify({
                    id: id,
                  }),
                  headers: {
                    "Content-Type": "application/json",
                  },
                }).then(async (message) => {
                  fetch("http://localhost:3000/todos").then(async (data) => {
                    const json = await data.json();
                    setTodos(json.todos);
                  });
                  message = await message.json();
                  alert("msg :: " + message.msg);
                });
              }}
            >
              mark as done
            </button>
            <button
              onClick={async () => {
                let id = todo._id;
                await fetch("http://localhost:3000/delete", {
                  method: "delete",
                  body: JSON.stringify({
                    id: id,
                  }),
                  headers: {
                    "Content-Type": "application/json",
                  },
                }).then(async (message) => {
                  fetch("http://localhost:3000/todos").then(async (data) => {
                    const json = await data.json();
                    setTodos(json.todos);
                  });
                  message = await message.json();
                  alert("msg ::" + message.msg);
                });
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}
