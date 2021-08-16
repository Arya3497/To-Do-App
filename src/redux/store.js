import rootReducer from "./reducer/index";
import { applyMiddleware, createStore } from "redux";

import logger from "redux-logger";
export const store = createStore(rootReducer, applyMiddleware(logger));
