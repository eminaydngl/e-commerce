import {legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers";
import { createLogger } from "redux-logger";
import { thunk } from "redux-thunk";

const logger = createLogger();

const store = createStore(reducers , applyMiddleware(thunk , logger));

export default store;