import { INCREMENT, DECREMENT } from './actions';

// Define the initial state
const initialState = {
    count: 0
};

// Define the reducer
export const counterReducer = (state = initialState, action) => {
    switch(action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            };
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            };
        default:
            return state;
    }
};
