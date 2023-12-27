import { applyMiddleware, legacy_createStore } from "redux";
import rootReducer from "./combineReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";
import logger from "redux-logger";



export const Reduxstore = legacy_createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk,logger)))