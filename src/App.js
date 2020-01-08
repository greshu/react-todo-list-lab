import React, { Component } from 'react';
import './App.css';

import TodosInput from './todos-input/todos-input';
import TodosList from './todos-list/todos-list'
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
            id: Date.now(),
            isChecked: false
        };

        this.setState(state => ({
            items: state.items.concat(newItem),
            text: ''
        }));
    }

    deleteItem(index) {
       let clonedItems = [...this.state.items];
       clonedItems.splice(index, 1);
       this.setState({
           items: clonedItems
       })
       console.log(this.state);
    }

    updateCheckbox(index) {
        let clonedItems = [...this.state.items];
        clonedItems[index].isChecked = !clonedItems[index].isChecked;
        this.setState({
            items: clonedItems
        })
    }

    render() {
        return (
            <div>
                <h3 className='App-Header'>Todo List</h3>
                    <TodosInput changed = {this.handleChange} 
                    submitted = {this.handleSubmit}
                    text = {this.state.text}
                    items = {this.state.items}></TodosInput>

                    <TodosList items = {this.state.items} 
                                deleted = {(index) => this.deleteItem(index)} 
                                handleCheckbox = {(index) => this.updateCheckbox(index)}></TodosList>
            </div>
        );
    }
}
