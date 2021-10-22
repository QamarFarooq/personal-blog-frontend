const Reducer = (state, action) => {
    switch (action.type) {
        case 'DO_ACTION':
            //https://medium.com/@housecor/handling-state-in-react-four-immutable-approaches-to-consider-d1f5c00249d5
            let newState = Object.assign({}, state)
            newState.displayMatrix = !newState.displayMatrix
            return newState
        
        default:
                return state;
    }
};

export default Reducer;