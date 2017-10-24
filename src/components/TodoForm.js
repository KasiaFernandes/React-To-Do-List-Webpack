import React from 'react';
import style from './TodoForm.css';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            text: " "
        }
    }

    onChange(event) {
        this.setState({
            text: event.target.value
        });
    }

    render() {
        return (
            <div className={style.TodoForm}>
                <input type="text" value={this.state.text} onChange={(event) => this.onChange(event)} />
                <button onClick={() => add(this.state.text)}>Add item</button>
            </div>
        )
    }
}


export default TodoForm;