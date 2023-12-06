import { act, renderHook } from "@testing-library/react"
import { useCounter } from "../../src/hooks/useCounter"

describe('tests in useCounter', () => {
    test('should return default values', () => {
        const { result } = renderHook(() => useCounter())
        const { counter, increment, decrement, reset } = result.current

        expect(counter).toBe(1)
        expect(decrement).toEqual(expect.any(Function))
        expect(increment).toEqual(expect.any(Function))
        expect(reset).toEqual(expect.any(Function))
    })
    test('should return counter with value 100', () => {
        const { result } = renderHook(() => useCounter(100))
        const { counter } = result.current

        expect(counter).toBe(100)
    })

    test('should return counter + 1', () => {
        const { result } = renderHook(() => useCounter())
        const { increment } = result.current
        act(() => increment())

        expect(result.current.counter).toBe(2)
    })

    test('should return counter - 1', () => {
        const { result } = renderHook(() => useCounter(100))
        const { decrement } = result.current
        act(() => decrement())

        expect(result.current.counter).toBe(99)
    })

    test('should return reset counter', () => {
        const { result } = renderHook(() => useCounter(100))
        const { decrement, reset } = result.current
        act(() => decrement())

        expect(result.current.counter).toBe(99)
        act(() => reset(100))
        expect(result.current.counter).toBe(100)
    })
})