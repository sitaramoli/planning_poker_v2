const initialState = {
    currentSession: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'SET_CURRENT_SESSION':
            return {
                ...state,
                currentSession: action.payload
            };
        default:
            return state;
    }
}