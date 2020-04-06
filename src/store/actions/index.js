export const completed = () => ({
    type: 'COMPLETED'
});

export const active = () => ({
    type: 'ACTIVE'
});

export const all = () => ({
    type: 'ALL'
})

export const addItem = (newTodo) => ({
    type: 'ADD_ITEM',
    payload: {
        newTodo
    }
})

export const updateText = (text) => ({
    type: 'UPDATE_TEXT',
    payload: {
        text
    }
})

export const updateCheckBox = (index) => ({
    type: 'UPDATE_CHECKBOX',
    payload: {
        index
    }
})

export const deleteItem = (index) => ({
    type: 'DELETE_ITEM',
    payload: {
        index
    }
})

