import { createAction } from 'redux-actions';

export const addItem = createAction('ADD');
export const removeItem = createAction('REMOVE');
export const makeItemActive = createAction('TO_ACTIVE');
export const makeItemCompleted = createAction('TO_COMPLETED');
export const removeCompletedItems = createAction('REMOVE_COMPLETED');
export const putItemInEditing = createAction('ENTER_EDITING');
export const removeItemFromEditing = createAction('EXIT_EDITING');
export const setItemText = createAction('SET_TEXT');
export const setDisplayMode = createAction('SET_DISPLAY_MODE');
