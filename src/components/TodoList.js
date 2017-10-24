import React from 'react';
import Todo from './Todo.js';
import style from './TodoList.css';

const TodoList = ({ items, remove }) => {

    const listItems = items.map((item) => {
        return <Todo item={item} key={item.id} remove={remove} />
    });

    return (
        <ul className={style.TodoList}>{listItems}</ul>
    )
}

export default TodoList;