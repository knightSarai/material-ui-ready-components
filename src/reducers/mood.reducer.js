const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return state
        case 'TOGGLE':
            return !state
        default:
            return state
    }
}
export default reducer;