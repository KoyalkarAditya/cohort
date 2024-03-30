import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <CustomButton count={count} setCount={setCount} />
    </div>
  );
}
//component which takes state as an input and renders the state
function CustomButton(props) {
  function incrementCount() {
    props.setCount(props.count + 1);
  }
  return <button onClick={incrementCount}>Count {props.count}</button>;
}
export default App;
