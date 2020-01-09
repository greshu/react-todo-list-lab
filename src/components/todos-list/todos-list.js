import React from 'react';
import TodoItem from './todo-item'
const todosList = (props) => {
    return (
        <div>
            <ul>
                {props.items.map((item, index) => (
                 <div key={item.id}>
                      <TodoItem handleCheckbox = {props.handleCheckbox}
                                deleted = {props.deleted}
                                item = {item}
                                index = {index}></TodoItem>
                 </div>
                ))}
            </ul>
        </div>
    )
}

export default todosList;