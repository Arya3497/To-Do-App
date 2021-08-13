const iniState = {
  todos: [],
};
// const setPersist = (todos) =>
//  window.localStorage.setItem("todos2", JSON.stringify(todos));

export const addTodo = (state = iniState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, todos: state.todos.concat(action.payload) };

    case "DELETE_TODO":
      // todos: state.todos.filter((todo, i) => i !== action.payload);
      // return {
      //   ...state,
      //   todos: addTodo,
      // };
      return { ...state, todos: action.payload };
    // const todo3 = state.todos.filter((todo, i) => i !== action.payload);
    // setPersist(todo3);
    // return {
    //   ...state,
    //   todos: todo3,
    // };
    default:
      return state;
  }
};
