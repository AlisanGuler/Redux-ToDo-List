import ActionTypes from "../actionTypes";

const initialState = {
  todos: [],
  isDarkMode: true,
  x: "",
  y: "",
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD:
      // console.log(action);
      return { ...state, todos: state.todos.concat(action.payload) };

    case ActionTypes.DELETE:
      const filtered = state.todos.filter((i) => i.id !== action.payload);
      return { ...state, todos: filtered };

    case ActionTypes.DONE:
      const done = state.todos.map((i) =>
        i.id === action.payload.id ? action.payload : i
      );
      return { ...state, todos: done };
    default:
      return state;
  }
};



export default todoReducer;
