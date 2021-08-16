export const addTodo = (value) => ({
  type: "ADD_TODO",
  payload: value,
});

export const deleteTodo = (key) => ({
  type: "DELETE_TODO",
  payload: key,
});

export const inputvalue = (value) => ({
  type: "INPUT_VALUE",
  payload: value,
});
