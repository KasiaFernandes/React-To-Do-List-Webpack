import React from 'react';
import style from './Todo.css';

const Todo = ({ item, remove }) => {
    return (
        <div>
            <li className={style.Todo} onClick={() => remove(item.id)}>{item.text}</li>
        </div>
    )
}

export default Todo;