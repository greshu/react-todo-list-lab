import React from 'react'

const todosInput = (props) => {
    return(
        <div>
             <form onSubmit={props.submitted}>
                    <label htmlFor='new-todo'>What needs to be done ?</label>
                    <br />
                    <br />
                    <input id='new-todo'
                           onChange={props.changed}
                           value={props.text}
                    />
                    <button>
                        Add #{props.items.length + 1}
                    </button>
             </form>
        </div>
    )
}

export default todosInput;