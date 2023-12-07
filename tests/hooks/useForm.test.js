const { renderHook, act } = require("@testing-library/react")
const { useForm } = require("../../src/hooks/useForm")

describe('tests on useForm', () => {
    const initialForm = {
        name: "Alex",
        email: "alex@alex-dev.me"
    }

    test('should return default values', () => {
        const { result } = renderHook(() => useForm(initialForm))
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onFormReset: expect.any(Function)
        })
    })

    test('should change the name in the form', () => {
        const newName = "Alexander"
        const { result } = renderHook(() => useForm(initialForm))
        const { onInputChange } = result.current
        act(() => onInputChange({ target: { name: 'name', value: newName } }))

        expect(result.current.name).toBe(newName)
        expect(result.current.formState.name).toBe(newName)
    })

    test('should reset the form', () => {
        const newName = "Alexander"
        const { result } = renderHook(() => useForm(initialForm))
        const { onInputChange, onFormReset } = result.current
        act(() => {
            onInputChange({ target: { name: 'name', value: newName } })
            onFormReset()
        })


        expect(result.current.name).toBe(initialForm.name)
        expect(result.current.formState.name).toBe(initialForm.name)
    })

})