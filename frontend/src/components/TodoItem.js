import styled from './TodoItem.module.css';

import { useDispatch } from 'react-redux';

import { markTodo, removeTodo } from '../redux/slices/todoSlice';

import deleteImage from '../assets/delete.png';
import checkImage from '../assets/check.png';



const TodoItem = ({ item, ind }) => {
    const dispatch = useDispatch();

    // delete handler for deleting the task
    const deleteHandler = () => {
        dispatch(removeTodo(ind));
    }


    // check handler for mark or unmark the task
    const checkHandler = () => {
        dispatch(markTodo(ind));
    }



    return (
        <div className={styled.container}>
            <div className={styled.main}>
                <div className={styled.textDiv}>
                    <span>{ind + 1}.</span>
                    <p>{item.text}</p>
                </div>

                <div className={styled.imagesDiv}>
                    <div className={styled.deleteDiv} onClick={deleteHandler}>
                        <img src={deleteImage} alt='delete' />
                    </div>
                    <div className={styled.checkDiv}
                        style={{
                            backgroundColor: item.completed ? 'red' : 'white'
                        }}
                        onClick={checkHandler}>
                        <img src={checkImage} alt='check' />
                    </div>
                </div>
            </div>
            <div>
                <hr />
            </div>
        </div>
    )
}

export default TodoItem