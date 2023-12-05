import PropTypes from "prop-types"
import { useState } from "react"

export const useCounter = (initialValue, maxValue) => {
    const [counter, setCounter] = useState(initialValue)
    const increment = (value = 1) => {
        setCounter(counter + value)
        if (maxValue && counter + value > maxValue) {
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

PropTypes.useCounter = {
    initialValue: PropTypes.number,
    maxValue: PropTypes.number || null
}

PropTypes.useCounterDefault = {
    initialValue: 1,
    maxValue: null
}