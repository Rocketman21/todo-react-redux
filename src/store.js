import { createStore, applyMiddleware, compose } from 'redux'; //combineReducers, applyMiddleware
import {persistStore, autoRehydrate} from 'redux-persist';
import logger from 'redux-logger';
import list from './reducers/listReducer.js';

const store = createStore(
  list, 
  undefined, 
  compose(
    applyMiddleware(logger),
    autoRehydrate()
  )
);

persistStore(store);

export default store;