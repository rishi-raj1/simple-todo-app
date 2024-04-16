import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import styled from './TodoList.module.css';

import TodoItem from './TodoItem';



const TodoList = () => {
    const [allTodos, setAllTodos] = useState([]);

    // we are getting all tasks present in store by useSelector hook
    const list = useSelector((state) => {
        const arr = state.todo;
        return arr;
    });


    useEffect(() => {
        setAllTodos(list);
        localStorage.setItem('todos', JSON.stringify(list));
    }, [list]);


    return (
        <div className={styled.container}>
            {
                allTodos.map((item, ind) => {
                    return (
                        <TodoItem item={item} ind={ind} key={ind} />
                    )
                })
            }
        </div>
    )
}

export default TodoList