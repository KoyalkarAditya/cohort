import { useState } from "react";
import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { countAtom } from "./store/atoms/Count";

//in recoil we get access for some hooks
//useRecoilState ->same as useState
//useRecoilValue ->used to get value
//useSetRecoilValue ->used to set the value
//RecoilRoot -> any component which uses recoil should be wrapped under this (same as provider)
function App() {
  return (
    <div>
      <Count />
    </div>
  );
}
function Count() {
  console.log("re-rendered");
  return (
    <div>
      <RecoilRoot>
        <CountRenderer />
        <Buttons />
      </RecoilRoot>
    </div>
  );
}
function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return <div>Count = {count}</div>;
}
// function Buttons() {
//   const [count, setCount] = useRecoilState(countAtom);
//   console.log("button - rendered");
//  ==> //in this we are using count value so component will rerender when the button is clicked
//   return (
//     <div>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         Increment
//       </button>
//     </div>
//   );
// }
function Buttons() {
  const setCount = useSetRecoilState(countAtom);
  console.log("button - rendered");
  return (
    <div>
      <button
        onClick={() => {
          setCount((count) => count + 1); //this will give the curren value of count as parameter
        }}
      >
        Increment
      </button>
    </div>
  );
}
export default App;
