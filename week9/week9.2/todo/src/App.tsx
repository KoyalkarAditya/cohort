import "./App.css";
interface TodoProp {
  title: string;
  description: string;
}
function App() {
  // const todo = { title: "go gym ", description: "lift weights" };
  return (
    <div>
      {/* <Todo {...todo} /> */}
      <Todo title="go to gym buddy" description="go lift weigthts" />
    </div>
  );
}
function Todo(todo: TodoProp) {
  return (
    <div>
      <h1>{todo.title}</h1>
      <h2>{todo.description}</h2>
    </div>
  );
}

export default App;
