const iniState = {
  value: "",
  id: 0,
  todos: [],
  isloading: true,
};

export const todo = (state = iniState, action) => {
  // console.log(state);
  switch (action.type) {
    case "ADD_TODO":
      const todosList = [...state.todos];
      todosList.push({
        todo: action.payload,
        //ID: state.id + 1,
      });

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

    case "FETCH":
      return {
        ...state,
        todos: [...state.todos, ...action.payload],
        isloading: false,
      };
    default:
      return state;
  }
};
