const init = {
    listTaskRedux: []
}
const RootReducer = (state = init, action) => {
    switch (action.type) {
        case 'GET_LIST_TASK':
            state.listTaskRedux = [...state.listTaskRedux, action.payload]
            console.log(state);
            return {
                ...state,
            };
        case 'DELETE_LIST_TASK':
            state.listTaskRedux = state.listTaskRedux.filter(function (item) {
                return item !== action.payload
            })
            console.log(state)
            return {
                ...state,
            };
        default:
            return state;
    }

}

export default RootReducer;