import { createStore, applyMiddleware } from "redux";
import { addTodo } from "./reducer/reducer";
import logger from "redux-logger";
// import createLogger from "redux-logger";
// const logger = createLogger();
import { composeWithDevTools } from "redux-devtools-extension";
export const store = createStore(
  addTodo,
  composeWithDevTools(
    applyMiddleware(logger)
    // other store enhancers if any
  )
);
//export const store = createStore(addTodo, applyMiddleware(logger));
