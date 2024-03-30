import { createContext, useContext, useState } from "react"
//prop drilling does not deal with re rendering
//it deals with the props which are passing to the grand children when the child does not use it
//useContext makes u teleport the props to the component which it is required with out actually going through the component tree
import { CountContext } from "./CountContext"
function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      {/* for single value */}
      <CountContext.Provider value={count}>
        <Count setCount={setCount} />
      </CountContext.Provider>
    </div>
  )
}
function Count({ setCount }) {
  return (
    <div>
      <CountRenderer />
      <Buttons setCount={setCount} />
    </div>
  )
}
function CountRenderer() {
  const count = useContext(CountContext)
  return <div>count is {count}</div>
}
function Buttons({ setCount }) {
  const count = useContext(CountContext)
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button
        onClick={() => {
          setCount(count - 1)
        }}
      >
        Decrement
      </button>
    </div>
  )
}

export default App
