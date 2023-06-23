// Import Packages
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { createStore, compose, applyMiddleware } from 'redux';
// Import Reducers
import rootReducer from '../reducers';

// ----------------------------------------------------------------------

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const middleWares = [thunk, sagaMiddleware];
const enhancer = composeEnhancers(applyMiddleware(...middleWares));
const store = createStore(rootReducer, enhancer);
export default store;
