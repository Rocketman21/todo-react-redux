import { handleActions } from 'redux-actions';

const listReducer = handleActions(
  {
    ADD: (state, action) => ({
      ...state,
      items: [
        ...state.items,
        {
          id: state.lastItemID + 1,
          text: action.payload,
          priority: state.inputPriority,
          isCompleted: false,
          isInEditing: false
        } 
      ],
      lastItemID: state.lastItemID + 1,
      active: state.active + 1
    }),
    
    REMOVE: (state, action) => ({
      ...state,
      items: state.items.filter((item) => item.id !== action.payload),
      active: state.items.some((item) => item.id === action.payload && !item.isCompleted) 
        ? state.active - 1 
        : state.active,
      completed: state.items.some((item) => item.id === action.payload && item.isCompleted) 
        ? state.completed - 1 
        : state.completed
    }),

    TO_COMPLETED: (state, action) => {
      // если он уже completed - выходим 
      if (state.items.some((item) => item.id === action.payload && item.isCompleted)) return state;

      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload) item.isCompleted = true;
          return item;
        }),
        active: state.active - 1,
        completed: state.completed + 1
      };
    },

    TO_ACTIVE: (state, action) => {
      // если он уже active - выходим 
      if (state.items.some((item) => item.id === action.payload && !item.isCompleted)) return state;

      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload) item.isCompleted = false;
          return item;
        }),
        active: state.active + 1,
        completed: state.completed - 1
      };
    },

    ENTER_EDITING: (state, action) => ({
      ...state,
      items: state.items.map((item) => {
        if (item.id === action.payload) item.isInEditing = true;
        return item;
      })
    }),

    EXIT_EDITING: (state, action) => ({
      ...state,
      items: state.items.map((item) => {
        if (item.id === action.payload) item.isInEditing = false;
        return item;
      })
    }),

    SET_TEXT: (state, action) => ({
      ...state,
      items: state.items.map((item) => {
        if (item.id === action.payload.id) item.text = action.payload.text;
        return item;
      })
    }),

    REMOVE_COMPLETED: (state, action) => {
      const updatedItems = state.items.filter((item) => !item.isCompleted);

      return {
        ...state,
        items: updatedItems,
        completed: updatedItems.length - state.active
      };
    },

    SET_INPUT_PRIORITY: (state, action) => ({
      ...state,
      inputPriority: action.payload
    }),
  },
  { 
    items: [], 
    lastItemID: 0, 
    active: 0, 
    completed: 0,
    inputPriority: 'regular'
  }
);

export default listReducer;