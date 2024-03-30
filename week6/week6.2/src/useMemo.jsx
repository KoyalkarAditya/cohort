import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [num, setNum] = useState(1);
  const [count, setCount] = useState(0);

  let s = useMemo(() => {
    //use Memo is used when , value of  variable  is dependent on a state variable and any time the state variable in dependency array changes useMemo runs
    // useMemo reduces the use of another state variable which will cause 2 re renders more than useEffect
    for (let i = 0; i <= num; i++) {
      s += i;
    }
    return count;
  }, [num]);

  return (
    <>
      <input
        type="number"
        onChange={(e) => {
          setNum(e.target.value);
        }}
      />
      <div>{s}</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Counter {count}
      </button>
    </>
  );
}

export default App;
