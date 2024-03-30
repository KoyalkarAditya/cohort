import { useState, useEffect } from "react"
import { Component } from "react"
import "./App.css"

function App() {
  const [render, setRender] = useState(true)
  useEffect(() => {
    setInterval(() => {
      setRender((s) => !s)
    }, 5000)
  }, [])
  return (
    <>
      {render && <MyComponent />}
      <MyComponentClass />
    </>
  )
}
function MyComponent() {
  useEffect(() => {
    // Perform setup or data fetching here
    console.log("component mounted")
    const intervalId = setInterval(() => {
      console.log("Hello")
    }, 1000)
    return () => {
      clearInterval(intervalId)
      // Cleanup code (similar to componentWillUnmount)
      console.log("component unmounted")
    }
  }, [])

  // Render UI
  return <div>Component</div>
}
class MyComponentClass extends Component {
  componentDidMount() {
    // Perform setup or data fetching here
    console.log("Component mounted of Class")
  }

  componentWillUnmount() {
    // Clean up (e.g., remove event listeners or cancel subscriptions)
    console.log("component unmounted of Class ")
  }

  render() {
    // Render UI
    return <h1>Class component</h1>
  }
}
export default App
