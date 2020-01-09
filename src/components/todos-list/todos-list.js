import React from 'react';
import TodoItem from './todo-item'
const todosList = (props) => {
    
    return (
        <div>
            <br></br>
            <a className='cursor-pointer' onClick= {() => props.filterList('All')}>Show All |</a> &nbsp; 
            <a className='cursor-pointer' onClick= {() => props.filterList('Completed')}>Show completed |</a> &nbsp; 
            <a className='cursor-pointer' onClick= {() => props.filterList('Active')}>Show Active</a>
            <ul>
                {props.items.map((item, index) => (
                 <div key={item.id}>
                     {item.isShow? <TodoItem handleCheckbox = {props.handleCheckbox}
                                deleted = {props.deleted}
                                item = {item}
                                index = {index}>
                                </TodoItem>: ''}
                 </div>
                ))}
            </ul>
        </div>
    )
}

export default todosList;