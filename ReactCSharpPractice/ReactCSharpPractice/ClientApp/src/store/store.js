import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// able to access all of the reducers via index.js from reducers
import rootReducer from '../reducers';

const configureStore = () => applyMiddleware(thunk)(createStore)(rootReducer);

export default configureStore;