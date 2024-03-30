import React, { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("my name is aditya");
  function updateTitle() {
    setTitle("my name is " + Math.random());
  }
  return (
    <React.Fragment>
      <button onClick={updateTitle}>click me to change the title</button>
      <Header title={title} />
      <Header title="my name is tinku" />
      <Header title="my name is tinku" />
      <Header title="my name is tinku" />
      <Header title="my name is tinku" />
    </React.Fragment>
  );
}
function Header(props) {
  let { title } = props;
  console.log(title);
  return (
    <>
      <h1>{title}</h1>
    </>
  );
}
export default App;
