import { useEffect, useState } from "react"
import axios from "axios"

function useTodos(n) {
  const [todos, setTodos] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const IntervalId = setInterval(() => {
      axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
        setTodos(res.data.todos)
        setIsLoading(false)
      })
    }, n * 1000)
    return () => {
      clearInterval(IntervalId)
    }
  }, [n])
  return {
    todos,
    isLoading,
  }
}
function App() {
  const [n, setN] = useState(2)
  const { todos, isLoading } = useTodos(n)
  return (
    <>
      {isLoading ? (
        <h1>Loading....</h1>
      ) : (
        todos.map((todo) => <Track key={todo.id} todo={todo} />)
      )}
    </>
  )
}

function Track({ todo }) {
  return (
    <div>
      {todo.title}
      <br />
      {todo.description}
    </div>
  )
}

export default App
