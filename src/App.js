import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            text: '',
            items: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ text: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();

        if(!this.state.text.length) {
            return;
        }

        const newItem = {
            text: this.state.text,
            id: Date.now()
        };

        this.setState(state => ({
            items: state.items.concat(newItem),
            text: ''
        }));
    }

    render() {
        return (
            <div>
                <h3 className='App-Header'>Todo List</h3>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='new-todo'>What needs to be done ?</label>
                    <br />
                    <br />
                    <input id='new-todo'
                           onChange={this.handleChange}
                           value={this.state.text}
                    />
                    <button>
                        Add #{this.state.items.length + 1}
                    </button>
                </form>
                <ul>
                    {this.state.items.map(item => (
                        <li key={item.id}>{ item.text }</li>
                    ))}
                </ul>
            </div>
        );
    }
}
