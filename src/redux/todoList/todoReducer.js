import * as actionTypes from "./types";

const initialState = {
  todoList: [
    { id: 1, name: "Hanoi" },
    { id: 2, name: "London" },
    { id: 3, name: "Berlin" },
  ],
  isAdd: true,
  todoUpdated: {},
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return { ...state, todoList: [...state.todoList, action.payload] };
    case actionTypes.REMOVE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo.id !== action.payload),
      };
    case actionTypes.EDIT_TODO:
      return {
        ...state,
        isAdd: false,
        todoUpdated: action.payload,
      };
    case actionTypes.UPDATE_TODO:
      const list = state.todoList.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...action.payload };
        }
        return todo;
      });
      return {
        ...state,
        todoList: [...list],
        isAdd: true,
      };
    default:
      return state;
  }
};

export default todoReducer;
