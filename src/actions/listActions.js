export function addItem(text) {
  return {
    type: 'ADD',
    payload: text
  };
}

export function removeItem(id) {
  return {
    type: 'REMOVE',
    payload: id
  };
}

export function makeItemActive(id) {
  return {
    type: 'TO_ACTIVE',
    payload: id
  };
}

export function makeItemCompleted(id) {
  return {
    type: 'TO_COMPLETED',
    payload: id
  };
}

export function removeCompletedItems() {
  return {
    type: 'REMOVE_COMPLETED'
  };
}

export function putItemInEditing(id) {
  return {
    type: 'ENTER_EDITING',
    payload: id
  };
}

export function removeItemFromEditing(id) {
  return {
    type: 'EXIT_EDITING',
    payload: id
  };
}

export function setItemText(id, text) {
  return {
    type: 'SET_TEXT',
    payload: { id, text }
  };
}

export function setDisplayMode(mode) {
  return {
    type: 'SET_DISPLAY_MODE',
    payload: mode
  };
}
