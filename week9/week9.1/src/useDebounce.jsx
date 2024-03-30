import { useEffect, useState } from "react"
import axios from "axios"

function App() {
  return <SearchBar />
}
function useDebounce(inputValue, delay) {
  const [debounceValue, setDebounceValue] = useState(inputValue)
  useEffect(() => {
    // Set up a timer to update the debounced value after the specified delay
    const timerID = setTimeout(() => {
      setDebounceValue(inputValue) // this will not run until the clock is expired
    }, delay)

    return () => {
      // Clean up the timer if the value changes before the delay has passed
      //this will clear none if the old clock is expired
      clearInterval(timerID)
    }
  }, [inputValue, delay])
  return debounceValue
}
const SearchBar = () => {
  const [inputValue, setInputValue] = useState()
  const debounceValue = useDebounce(inputValue, 500) // this will get called whenever the inputValue changes
  useEffect(() => {
    //sample example of fetching data from backend using debouncing
    console.log("fetched the data ")
  }, [debounceValue])
  return (
    <>
      <div>Debounced value is {debounceValue}</div>
      <input
        type="text"
        onChange={(e) => {
          setInputValue(e.target.value)
        }}
        placeholder="search"
      />
    </>
  )
}

export default App
