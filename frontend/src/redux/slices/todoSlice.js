import { createSlice } from "@reduxjs/toolkit";

const todos = localStorage.getItem('todos');

export const todoSlice = createSlice({
    initialState: todos ? JSON.parse(todos) : [],
    name: 'todoSlice',
    reducers: {
        addTodo: (state, action) => {
            return [
                ...state,
                {
                    text: action.payload,
                    completed: false
                }

            ]
        },
        removeTodo: (state, action) => {
            return state.filter((item, ind) => {
                return ind !== action.payload;
            });
        },
        markTodo: (state, action) => {
            return state.map((item, ind) => {
                if (ind === action.payload) {
                    return {
                        text: item.text,
                        completed: !item.completed
                    }
                }
                else {
                    return item;
                }
            })
        }
    }
});


export const { addTodo, removeTodo, markTodo } = todoSlice.actions;

export default todoSlice.reducer;