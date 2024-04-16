import styled from './MainPage.module.css';

import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';



const MainPage = () => {
    return (
        <div className={styled.container}>
            <p className={styled.heading}>TODO APP</p>
            <TodoInput />
            <TodoList />
        </div>
    )
}

export default MainPage