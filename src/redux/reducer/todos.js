import firebase from "../../Firebase/firebase_config";

const iniState = {
  value: "",
  id: 0,
  todos: [],
  isloading: true,
};

export const todo = (state = iniState, action) => {
  console.log(state);
  switch (action.type) {
    case "ADD_TODO":
      //stodos:(...)
      const todosList = [...state.todos];

      // const db = firebase.firestore();
      // db.collection("todo").add({
      //   ID: state.id + 1,
      //   name: action.payload,
      // });

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

    case "FETCH":
      const array1 = { ...action.payload };
      console.log("array123", JSON.stringify(action.payload));
      console.log("state", state);
      return {
        ...state,
        todos: array1,
        isloading: false,
      };
    default:
      console.log("state", state);
      return state;
  }
};
