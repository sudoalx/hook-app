import { fireEvent, render, screen } from "@testing-library/react"
import MultipleCustomHooks from "../../src/03-examples/MultipleCustomHooks"
import { useCounter, useFetch } from "../../src/hooks"

jest.mock('../../src/hooks/useFetch')
jest.mock('../../src/hooks/useCounter')

describe('tests on <MultipleCustomHooks/>', () => {
    const mockIncrement = jest.fn()
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    })

    beforeAll(() => {
        jest.clearAllMocks()
    })

    test('should show the default component', () => {
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        })
        render(<MultipleCustomHooks />)

        expect(screen.getByText('Loading...'))
        expect(screen.getByText('Rick and Morty Characters'))
    })

    test('should return data from API', () => {
        useFetch.mockReturnValue({
            data: { name: "Alex", species: "Human" },
            isLoading: false,
            hasError: null
        })
        render(<MultipleCustomHooks />)

        expect(screen.getByText("Alex")).toBeTruthy()
        expect(screen.getByText("Human")).toBeTruthy()
    })

    test('should return data from API', () => {
        useFetch.mockReturnValue({
            data: { name: "Alex", species: "Human" },
            isLoading: false,
            hasError: null
        })

        render(<MultipleCustomHooks />)
        const nextButton = screen.getByRole('button', { name: "Next" })
        fireEvent.click(nextButton)

        expect(mockIncrement).toHaveBeenCalled()
    })
})
