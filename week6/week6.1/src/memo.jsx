import React, { useState } from "react";

function App() {
  const [title, setTitle] = useState("my name is aditya");
  function updateTitle() {
    setTitle("my name is " + Math.random());
  }
  return (
    // parent rerenders (div) but the siblings does not rerenders if state variable is not changed
    // basically memo lets u skip re rendering if props are unchanged
    <div>
      <button onClick={updateTitle}>click me to change the title</button>
      <Header title={title} />
      <Header title="my name is tinku" />
      <Header title="my name is tinku" />
      <Header title="my name is tinku" />
    </div>
  );
}
const Header = React.memo(({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
});
export default App;
