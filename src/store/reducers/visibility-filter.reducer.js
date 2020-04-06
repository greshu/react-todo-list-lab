export const visibilityFilterReducer = (state = {
    text: '',
    items: []
}, action) => {
    switch (action.type) {
        case 'Completed':
            state.items.forEach((item) => {
                item.isChecked ? item.isShow = true : item.isShow = false;
            });
            return state
        case 'Active':
            state.items.forEach((item) => {
                !item.isChecked ? item.isShow = true : item.isShow = false;
            });
            return state
        case 'All':
        default:
            state.items.forEach((item) => {
                item.isShow = true
            });
            return state
    }
}
