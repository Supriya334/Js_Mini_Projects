import { createStore } from 'redux';
import { counterReducer } from './reducer';

// Create the Redux store
export const store = createStore(counterReducer);
