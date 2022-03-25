import { ADD_TODO, DELETE_TASK, TOGGLE_TODO } from "../actionType";


const initialState = {
  todos: JSON.parse(localStorage.getItem('todo')) || []
}

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return {
        todos: [
          ...state.todos,
          { ...action.payload, completed: false }
        ]
      }
    }
    case TOGGLE_TODO: {
      const { id } = action.payload;
      const todos = state.todos.map(obj => obj.id === id ? { ...obj, completed: !obj.completed } : obj);
      return { todos }
    }
    case DELETE_TASK: {
      const newList = [...state.todos];
      newList.splice(action.payload, 1);
      localStorage.setItem("todo",JSON.stringify(newList));
      return {todos: newList}
    }

    default: {
      return state;
    }
  }
}

export default todos;
