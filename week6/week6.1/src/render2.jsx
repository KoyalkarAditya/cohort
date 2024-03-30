import React, { useState } from "react";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      {/* we define the state variable in  lowest child  as  possible so the parent  doest not re render*/}
      <HeaderWithButton />
      <Header title="my name is tinku" />
    </React.Fragment>
  );
}
function HeaderWithButton() {
  // state variable
  const [title, setTitle] = useState("my name is aditya");
  function updateTitle() {
    setTitle("my name is " + Math.random());
  }
  return (
    <>
      <button onClick={updateTitle}>change the title</button>
      <h1>{title}</h1>
    </>
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
