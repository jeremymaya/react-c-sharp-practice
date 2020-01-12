import { combineReducers } from 'redux';
import tripReducers from './tripReducers';

// root reducer file to export all the reducers so they are accessible from other parts of the app 
const rootReducer = combineReducers({
    trips: tripReducers
});

export default rootReducer;