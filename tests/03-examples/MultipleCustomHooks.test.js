import { render, screen } from "@testing-library/react"
import MultipleCustomHooks from "../../src/03-examples/MultipleCustomHooks"
import { useFetch } from "../../src/hooks"

jest.mock('../../src/hooks/useFetch')

describe('tests on <MultipleCustomHooks/>', () => {
    test('should show the default component', () => {
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            error: null
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
        screen.debug()
        expect(screen.getByText("Alex")).toBeTruthy()
        expect(screen.getByText("Human")).toBeTruthy()
    })
})
