import { createStore, applyMiddleware } from 'redux'; //combineReducers, applyMiddleware
import logger from 'redux-logger';
import list from './reducers/listReducer.js';

export default createStore(
  list, 
  { 
    items: [], 
    lastItemID: 0, 
    active: 0, 
    completed: 0, 
    display: 'all' 
  }, 
  applyMiddleware(logger)
);