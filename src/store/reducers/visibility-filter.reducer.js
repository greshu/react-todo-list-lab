export const visibilityFilterReducer = (state = {
    items: []
}, action) => {
    var newState = {...state};
    newState.items = [...state.items];
    debugger
    switch (action.type) {
        // case 'COMPLETED':
        //     newState.items.forEach((item) => {
        //         item.isChecked ? item.isShow = true : item.isShow = false;
        //     });
        //     return newState
        // case 'ACTIVE':
        //     newState.items.forEach((item) => {
        //         !item.isChecked ? item.isShow = true : item.isShow = false;
        //     });
        //     return newState
        // case 'ALL':
        default:
            // newState.items.forEach((item) => {
            //     item.isShow = true
            // });
            return newState
    }
}
