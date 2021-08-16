const iniState = {
  value: "",
  id: 0,
  todos: [],
};

export const todo = (state = iniState, action) => {
  console.log(state);
  switch (action.type) {
    case "ADD_TODO":
      //return { ...state, todos: state.todos.concat(action.payload) };
      const todosList = [...state.todos];

      todosList.push({
        todo: action.payload,
      });
      console.log("list", todosList);
      return {
        ...state,
        todos: todosList,
        id: state.id + 1,
        value: "",
      };

    case "INPUT_VALUE":
      return {
        ...state,
        value: action.payload,
      };
    case "DELETE_TODO":
      return { ...state, todos: action.payload };
    default:
      return state;
  }
};
