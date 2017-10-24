import { createSelector } from 'reselect';

const getItems = (state) => state.items;

const getCompletedItems = createSelector(
  getItems, (items) => items.filter((item) => item.isCompleted).length
);

export default getCompletedItems;