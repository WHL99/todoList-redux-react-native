import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todoList: []
}

const todoSlice = createSlice({
    name: 'todoItems',
    initialState,
    reducers: {
        saveTodoItem: (state, action) => {
            state.todoList.push(action.payload)
        },
        setCheckbox: (state, action) => {
            state.todoList.map(item => {
                if (action.payload === item.id) {
                    if (!item.complete) {
                        item.complete = !item.complete
                    } else {
                        item.complete = !item.complete
                    }
                }
            })
        },
    }
});

export const { saveTodoItem, setCheckbox } = todoSlice.actions
export const selectTodoList = state => state.todoItems.todoList
export default todoSlice.reducer