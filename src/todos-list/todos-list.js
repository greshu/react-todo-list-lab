import React from 'react'
const todosList = (props) => {
   
    function getTextLabel (isCheckboxChecked) {
        debugger
       return isCheckboxChecked? { textDecoration: 'line-through'}: {textDecoration: 'none'}
    }
    // TODO: Ask

    return (
        <div>
            <ul>
                {props.items.map((item, index) => (
                 <div key={item.id}>
                        <li>
                            <input type="checkbox" defaultChecked = {item.isChecked} onClick={() => props.handleCheckbox(index)}></input>
                            <span style={getTextLabel(item.isChecked)}>{item.text}</span>
                            {/* {item.text} */}
                            <button onClick={() => { props.deleted(index)}}>Delete</button>
                        </li>
                 </div>
                ))}
            </ul>
        </div>
    )
}

export default todosList;