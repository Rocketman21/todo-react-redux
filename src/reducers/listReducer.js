const listReducer = (
  state = { 
    items: [], 
    lastItemID: 0, 
    active: 0, 
    completed: 0,
    display: 'all' 
  },
  action
) => {
  switch (action.type) {
    case 'ADD':
      state = {
        ...state,
        items: [
          ...state.items,
          {
            id: state.lastItemID + 1,
            text: action.payload,
            isCompleted: false,
            isInEditing: false
          } 
        ],
        lastItemID: state.lastItemID + 1,
        active: state.active + 1
      };
      break;
    case 'REMOVE':
      state = {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
        active: state.items.some((item) => item.id === action.payload && !item.isCompleted) 
          ? state.active - 1 
          : state.active,
        completed: state.items.some((item) => item.id === action.payload && item.isCompleted) 
          ? state.completed - 1 
          : state.completed
      }
      break;
    case 'TO_COMPLETED':
      // если он уже completed - выходим 
      if (state.items.some((item) => item.id === action.payload && item.isCompleted)) break;

      state = {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload) item.isCompleted = true;
          return item;
        }),
        active: state.active - 1,
        completed: state.completed + 1
      }
      break;
    case 'TO_ACTIVE':
      // если он уже active - выходим 
      if (state.items.some((item) => item.id === action.payload && !item.isCompleted)) break;

      state = {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload) item.isCompleted = false;
          return item;
        }),
        active: state.active + 1,
        completed: state.completed - 1
      }
      break;
    case 'ENTER_EDITING':
      state = {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload) item.isInEditing = true;
          return item;
        })
      }
      break;
      case 'EXIT_EDITING':
        state = {
          ...state,
          items: state.items.map((item) => {
            if (item.id === action.payload) item.isInEditing = false;
            return item;
          })
        }
        break;
    case 'SET_TEXT':
      state = {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload.id) item.text = action.payload.text;
          return item;
        })
      }
      break;
    case 'REMOVE_COMPLETED':
      const updatedItems = state.items.filter((item) => !item.isCompleted);

      state = {
        ...state,
        items: updatedItems,
        completed: updatedItems.length - state.active
      }
      break;
    case 'SET_DISPLAY_MODE':
      state = {
        ...state,
        display: action.payload
      }
      break;
    default:
  }

  return state;
};

export default listReducer;