import React, { Component } from 'react';
import { connect } from "react-redux";
import './App.css';
import TodosInput from './components/todos-input/todos-input';
import TodosList from './components/todos-list/todos-list'
import { completed, active, all } from "./store/actions/index";

export class App extends Component {
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

        if (!this.state.text.length) {
            return;
        }

        const newItem = {
            text: this.state.text,
            id: Date.now(),
            isChecked: false,
            isShow: true
        };

        this.setState(state => ({
            items: state.items.concat(newItem),
            text: ''
        }));
    }

    filterList(filterType) {
        switch (filterType) {
            case 'All':
               this.props.all();
                break;
            case 'Completed':
            this.props.completed();
                break;
            case 'Active':
            this.props.active();

        }
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
                <TodosInput changed={this.handleChange}
                    submitted={this.handleSubmit}
                    text={this.state.text}
                    items={this.state.items}></TodosInput>

                <TodosList items={this.state.items}
                    deleted={(index) => this.deleteItem(index)}
                    filterList={(filterType) => this.filterList(filterType)}
                    handleCheckbox={(index) => this.updateCheckbox(index)}></TodosList>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    items: state.items
});


const mapDistpatchToProps = {
    all,
    completed,
    active
};

export default connect(
    mapStateToProps,
    mapDistpatchToProps
)(App);