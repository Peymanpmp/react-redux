const initialState = {
    counter: 0
}

const reducer = ( state = initialState, action) => {
    switch (action.type) {
        case 'INC':
            return { counter: state.counter + action.value}
        case 'DEC':
            return { counter: state.counter - action.value}
        default:
            return state
    }
}

export default reducer