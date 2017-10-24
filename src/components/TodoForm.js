import React from 'react';
import style from './TodoForm.css';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            text: " "
        }
        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onChange(event) {
        this.setState({
            text: event.target.value
        });
    }

    onClick() {
        this.props.add(this.state.text)
        this.setState({
            text: ""
        })
    }

    render() {
        return (
            <div className={style.TodoForm}>
                <input type="text" value={this.state.text} onChange={this.onChange} />
                <button onClick={this.onClick}>Add item</button>
            </div>
        )
    }
}


export default TodoForm;