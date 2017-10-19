import React from 'react';

class Title extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h1>This is your to do list</h1>
                <h4>Items to do: ${this.state.data.length}</h4>
            </div>
        )
    }
}