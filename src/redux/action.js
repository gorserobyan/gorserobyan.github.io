import { ADD_TODO, TOGGLE_TODO,SET_FILTER, DELETE_TASK} from "./actionType";

let nextTodoId = 0;
export const addTodo = content => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content: content.content,
    description: content.description
  }
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id }
});

export const setFilter = filter => ({
  type: SET_FILTER,
  payload: { filter }
});

export const deleteTask = id => ({
  type: DELETE_TASK,
  payload: id
});