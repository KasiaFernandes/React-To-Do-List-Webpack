import React from 'react';

const Title = props => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h4>Items to complete: {props.number}</h4>
        </div>
    )
}

export default Title;

// Question: is there a need for 'class Title extends...' here?
// Question: Does every component file need a separate css file? 





