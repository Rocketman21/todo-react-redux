import { createSelector } from 'reselect';
import React from 'react';
import TodoItem from '../containers/TodoItem';

const getVisibileByStatus = (state) => state.visibleByStatus;
const getVisibileByPriority = (state) => state.visibleByPriority;
const getItems = (state) => state.items;


const getVisibleItems = createSelector(
  [getVisibileByStatus, getVisibileByPriority, getItems],
  (visibleByStatus, visibleByPriority, items) => {
    let filtered = items;

    switch(visibleByStatus) {
      case 'active':
        filtered = filtered.filter((item) => !item.isCompleted);
        break;
      case 'completed':
        filtered = filtered.filter((item) => item.isCompleted);
        break;
      default:
    }

    switch(visibleByPriority) {
      case 'regular':
        filtered = filtered.filter((item) => item.priority === 'regular');
        break;
      case 'important':
        filtered = filtered.filter((item) => item.priority === 'important');
        break;
      case 'ultra':
        filtered = filtered.filter((item) => item.priority === 'ultra');
        break;
      default:
    }

    return filtered.map((item, key) => <TodoItem item={item} key={key}/>)
  }
);

export default getVisibleItems;