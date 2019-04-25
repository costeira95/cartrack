import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import search from "../reducers/search";

// * creates the store and a logger for debuging
export default createStore(search, applyMiddleware(logger));
