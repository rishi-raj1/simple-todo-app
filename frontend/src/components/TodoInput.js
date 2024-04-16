import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/slices/todoSlice';


import styled from './TodoInput.module.css';


const TodoInput = () => {
    const dispatch = useDispatch();

    const [inputVal, setInputVal] = useState('');


    const inputHandler = (e) => {
        setInputVal(e.target.value);
    }

    const addTaskHandler = () => {
        if (inputVal.trim().length) {
            dispatch(addTodo(inputVal.trim()));
            setInputVal("");
        }
    }

    const keyPressHandler = (e) => {
        if (e.key === 'Enter') {
            dispatch(addTodo(inputVal.trim()));
            setInputVal("");
        }
    }



    return (
        <div className={styled.container}>
            <input placeholder='Add Todo' className={styled.input} value={inputVal} onChange={inputHandler} onKeyUp={keyPressHandler} />
            <button className={styled.plusButton} onClick={addTaskHandler}>+</button>
        </div>
    )
}


export default TodoInput