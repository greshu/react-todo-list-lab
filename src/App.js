import React, { Component } from 'react';
import { connect } from "react-redux";
import './App.css';
import TodosInput from './components/todos-input/todos-input';
import TodosList from './components/todos-list/todos-list'
import { completed, active, all, addItem, updateText,
    updateCheckBox, deleteItem } from "./store/actions/index";

const App = (props) => {

    const handleChange = (e) => {
        props.updateText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!props.text.length) {
            return;
        }
        const newItem = {
            text: props.text,
            id: Date.now(),
            isChecked: false,
            isShow: true
        };
        props.addItem(newItem)
    }

    const filterList = (filterType) => {
        switch (filterType) {
            case 'All':
                props.all();
                break;
            case 'Completed':
                props.completed();
                break;
            case 'Active':
                props.active();

        }
    }

    const deleteItem = (index) => {
        props.deleteItem(index);
    }

    const updateCheckbox = (index) => {
        props.updateCheckBox(index)
    }


    return (
        <div>
            <h3 className='App-Header'>Todo List</h3>
            <TodosInput changed={handleChange}
                submitted={handleSubmit}
                text={props.text}
                items={props.items}></TodosInput>

            <TodosList items={props.items}
                deleted={(index) => deleteItem(index)}
                filterList={(filterType) => filterList(filterType)}
                handleCheckbox={(index) => updateCheckbox(index)}></TodosList>
        </div>
    );

}


const mapStateToProps = state => {
    return ({
        items: state.todoListUpdate.items,
        text: state.todoListUpdate.text,
        // items: state.visibility.items
    });
}


const mapDistpatchToProps = {
    all,
    completed,
    active,
    addItem,
    updateText,
    updateCheckBox,
    deleteItem
};

export default connect(
    mapStateToProps,
    mapDistpatchToProps
)(App);