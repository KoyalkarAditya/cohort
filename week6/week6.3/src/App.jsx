import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./App.css";

function App() {
  const divRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      divRef.current.innerHTML = `total income  = ${100000}`;
    }, 3000);
  }, []);
  const income = 50000;
  return <div ref={divRef}>total income = {income}</div>;
}
export default App;
