//react is view library
import React from "react";
//reactdom is used for website
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import "./index.css";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";
//css framework
import "tachyons";
import { searchRobots, requestRobots } from "./reducers";

//middleware
const logger = createLogger();

//putting together all reducers
const rootReducer =  combineReducers({searchRobots, requestRobots})
//creating a store
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
  //the provider makes the store available to all component with it
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
