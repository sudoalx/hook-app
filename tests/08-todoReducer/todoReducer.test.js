import { todoReducer } from "../../src/08-useReducer/todoReducer"

describe('test todoReducer', () => {
    const initialState = [{
        id: 1,
        desc: "Demo Todo",
        done: false
    }]

    test('should return default state', () => {
        const state = todoReducer(initialState, {})
        expect(state).toBe(initialState)
    })

    test('should add a todo', () => {
        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                desc: "Demo Todo 2",
                done: false
            }
        }

        const state = todoReducer(initialState, action)
        expect(state.length).toBe(2)
        expect(state).toContainEqual(action.payload)
    })

    test('should delete a todo', () => {
        const action = {
            type: '[TODO] Remove Todo',
            payload: 1
        }

        const state = todoReducer(initialState, action)
        expect(state.length).toBe(0)
    })

    test('should toggle a todo', () => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1
        }

        const state = todoReducer(initialState, action)
        expect(state[0].done).toBe(true)
    })

})