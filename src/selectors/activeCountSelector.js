import { createSelector } from 'reselect';

const getItems = (state) => state.items;

const getActiveItems = createSelector(
  getItems, (items) => items.filter((item) => !item.isCompleted).length
);

export default getActiveItems;