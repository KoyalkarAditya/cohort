import { useState } from "react"
import { Component } from "react"
import "./App.css"

function App() {
  return (
    <>
      <MyComponent />
    </>
  )
}
function MyComponent1() {
  // using the useState hook in react
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  )
}
class MyComponent extends Component {
  //class based hooks
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    )
  }
}

export default App
