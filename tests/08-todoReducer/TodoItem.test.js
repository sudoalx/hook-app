import { fireEvent, render, screen } from "@testing-library/react"
import { TodoItem } from "../../src/08-useReducer/components/TodoItem"

describe('tests on <TodoItem/>', () => {
    const todo = {
        id: 1,
        description: 'Soul Stone',
        done: false
    }

    const onDeleteTodoMock = jest.fn()
    const onToggleTodoStatusMock = jest.fn()

    beforeAll(() => jest.clearAllMocks())

    test('should show pending Todo', () => {
        render(
            <TodoItem
                todo={todo}
                onToggleTodoStatus={onToggleTodoStatusMock}
                onRemoveTodo={onDeleteTodoMock}
            />
        )

        const liElement = screen.getByRole('listitem')
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between align-items-center bg-dark text-white')

        const spanElement = screen.getByLabelText('description')
        expect(spanElement.className).toBe("text-decoration-none")
    })

    test('should show completed Todo', () => {
        todo.done = true

        render(
            <TodoItem
                todo={todo}
                onToggleTodoStatus={onToggleTodoStatusMock}
                onRemoveTodo={onDeleteTodoMock}
            />
        )

        const spanElement = screen.getByLabelText('description')
        expect(spanElement.className).toBe("text-decoration-line-through")
    })

    test('should call toggle Todo when clicked', () => {
        render(
            <TodoItem
                todo={todo}
                onToggleTodoStatus={onToggleTodoStatusMock}
                onRemoveTodo={onDeleteTodoMock}
            />
        )

        const spanElement = screen.getByLabelText('description')
        fireEvent.click(spanElement)

        expect(onToggleTodoStatusMock).toHaveBeenCalledWith(todo.id)
    })

    test('should remove Todo from the list', () => {
        render(
            <TodoItem
                todo={todo}
                onToggleTodoStatus={onToggleTodoStatusMock}
                onRemoveTodo={onDeleteTodoMock}
            />
        )


        const deleteButton = screen.getByLabelText('remove')
        fireEvent.click(deleteButton)

        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id)
    })
})