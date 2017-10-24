import React from 'react';
import style from './Title.css';

const Title = props => {
    return (
        <div className={style.Title}>
            <h1>{props.title}</h1>
            <h4>Items to complete: {props.number}</h4>
        </div>
    )
}

export default Title;

// Question: is there a need for 'class Title extends...' here?
// Question: Does every component file need a separate css file? 



/*
const Title = ({title, number}) => {
    return (
        <div className={style.Title}>
            <h1>{title}</h1>
            <h4>Items to complete: {number}</h4>
        </div>
    )
}

export default Title;
*/
