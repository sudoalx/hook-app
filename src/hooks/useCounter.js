import { useState } from "react"

const useCounter = (initialValue = 1, maxValue = 10) => {
    const [counter, setCounter] = useState(initialValue)
    const increment = (value = 1) => {
        setCounter(counter + value)
        if (counter + value > maxValue) {
            reset()
        }
    }
    const decrement = (value = 1) => {
        setCounter(counter - value)
        if (counter - value < initialValue) {
            reset()
        }
    }
    const reset = (value = 1) => {
        setCounter(value)
    }
    return {
        counter,
        increment,
        decrement,
        reset
    }
}

export default useCounter