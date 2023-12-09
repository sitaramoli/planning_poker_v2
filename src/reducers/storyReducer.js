const initialState = {
    currentStory: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'SET_CURRENT_STORY':
            return {
                ...state,
                currentStory: action.payload
            };
        default:
            return state;
    }
}