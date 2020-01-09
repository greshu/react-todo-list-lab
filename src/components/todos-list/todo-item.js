import React from 'react';

const todoItem = (props) => {
    return (
        <div>
            <li>
                <input type="checkbox" defaultChecked={props.item.isChecked} onClick={() => props.handleCheckbox(props.index)}></input>
                <span style={{ textDecoration: props.item.isChecked ? 'line-through' : 'none' }}>{props.item.text}</span>
                <button onClick={() => { props.deleted(props.index) }}>Delete</button>
            </li>
        </div>
    )
}

export default todoItem;