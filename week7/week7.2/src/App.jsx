import { useMemo, useState } from "react";
//Components can subscribe to atoms, and when an atom's state changes, Recoil automatically triggers a re-render of the components that depend on that atom.
//unlike the contextAPI where we also trigger the components which are not dependent on state
import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { countAtom } from "./store/atoms/Count";
import { evenSelector } from "./store/atoms/Selectors";

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
      <EvenOROdd />
    </div>
  );
}
function EvenOROdd() {
  const isEven = useRecoilValue(evenSelector);
  return <div>{isEven ? <b>It is Odd</b> : <b>It is Even</b>}</div>;
}
export default App;
