// Import Packages
import { combineReducers } from 'redux';
// Import Reducers
import searchActorListReducer from './searchActorListReducer';

// ----------------------------------------------------------------------

const rootReducer = combineReducers({
  searchActorListData: searchActorListReducer,
});

export default rootReducer;
