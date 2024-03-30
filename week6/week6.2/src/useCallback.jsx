import { memo, useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  // let a = 1;  for every re-render a will be defined again and re render does n't happen in memo Demo even  though  props are changed
  // function a() {
  //   console.log("");
  // } //but here the function is defined again for every re render and re -render happen to the Demo component as react might thick the function in the prop is changed

  //to remove the re-render ,especially the cases involving child component that rely on reference equity we use useCallback
  //especially to make react remember a function
  const a = useCallback(() => {
    console.log("");
  }, []);

  const [count, setCount] = useState(0);
  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count = {count}
      </button>
      <Demo a={a} />
    </>
  );
}

const Demo = memo(({ a }) => {
  console.log("rendered");
  return <div>Hii there</div>;
});

export default App;
