export const todoListReducer = (state = {
    text: '',
    items: []
}, action) => {
    var newState = { ...state };
    switch (action.type) {
        case 'ADD_ITEM':
            newState.items = [...state.items, action.payload.newTodo]
            return newState
        case 'DELETE_ITEM':
            newState.items = [...state.items];
            newState.items.splice(action.payload.index, 1);
            return newState;
        case 'UPDATE_TEXT':
            newState.text = action.payload.text
            return newState
        case 'UPDATE_CHECKBOX':
            newState.items = [...state.items];
            newState.items[action.payload.index].isChecked = !newState.items[action.payload.index].isChecked;
            return newState
        case 'COMPLETED':
            newState.items = [...state.items];
            newState.items.forEach((item) => {
                item.isChecked ? item.isShow = true : item.isShow = false;
            });
            return newState
        case 'ACTIVE':
            newState.items = [...state.items];  
            newState.items.forEach((item) => {
                !item.isChecked ? item.isShow = true : item.isShow = false;
            });
            return newState
        case 'ALL':
            newState.items = [...state.items];
            newState.items.forEach((item) => {
                item.isShow = true
            });
            return newState
        default:
            return state
    }
}