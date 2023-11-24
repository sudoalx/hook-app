import { useState } from "react"

const useCounter = (initialValue = 10) => {
    const [counter, setCounter] = useState(initialValue)
    const increment = (value) => {
        value ? setCounter(counter + value) : setCounter(counter + 1)
    }
    const decrement = (value) => {
        if (counter <= 0) return
        value ? setCounter(counter - value) : setCounter(counter - 1)
    }
    const reset = (value) => {
        // properly reset the counter when 0 is passed
        value == undefined || value == null ? setCounter(initialValue) : setCounter(value)
    }
    return {
        counter,
        increment,
        decrement,
        reset
    }
}

export default useCounter