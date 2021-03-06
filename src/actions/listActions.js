import { createAction } from 'redux-actions';

export const addItem = createAction('ADD');
export const removeItem = createAction('REMOVE');
export const makeItemActive = createAction('TO_ACTIVE');
export const makeItemCompleted = createAction('TO_COMPLETED');
export const removeCompletedItems = createAction('REMOVE_COMPLETED');
export const putItemInEditing = createAction('ENTER_EDITING');
export const removeItemFromEditing = createAction('EXIT_EDITING');
export const setItemText = createAction('SET_TEXT');
export const setInputPriority = createAction('SET_INPUT_PRIORITY');
export const setVisibilityByStatus = createAction('SET_VISIBILITY_BY_STATUS');
export const setVisibilityByPriority = createAction('SET_VISIBILITY_BY_PRIORITY');
