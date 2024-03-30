import { useEffect, useState } from "react"
import axios from "axios"

function useIsOnline() {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine)

  useEffect(() => {
    window.addEventListener("online", () => {
      setIsOnline(true)
    })
    window.addEventListener("offline", () => {
      setIsOnline(false)
    })
    return () => {
      window.removeEventListener("online")
      window.removeEventListener("offline")
    }
  }, [])
  return isOnline
}
function useMousePointer() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY })
  }
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])
  return position
}

function useCustomSetInterval(callbackFunction, n) {
  //only the first time the useCustomSetInterval is called the useEffect will run so we include callBackFunction in dependency array as react does not remember the functions and thinks function is changed
  useEffect(() => {
    const intervalId = setInterval(() => {
      callbackFunction()
    }, n)
    return () => {
      clearInterval(intervalId)
    }
  }, [callbackFunction])
}
function App() {
  const [count, setCount] = useState(0)
  useCustomSetInterval(() => {
    setCount(count + 1)
    //setCount((c)=> c+1) // if u don't want to add dependency list
  }, 1000)
  return <h1>Count is {count}</h1>
}

// function App() {
//   const mousePointer = useMousePointer()
//   return (
//     <h1>
//       {mousePointer.x} {mousePointer.y}
//     </h1>
//   )
// }
// function App() {
//   const isOnline = useIsOnline()
//   return <>{isOnline ? <h1>U are online</h1> : <h1>U are offline</h1>}</>
// }

export default App
