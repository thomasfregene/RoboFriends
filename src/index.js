//react is view library
import React from "react";
//reactdom is used for website
import ReactDOM from "react-dom";
import "./index.css";
import App from './App';
import * as serviceWorker from "./serviceWorker";
//css framework
import "tachyons";

ReactDOM.render(<App/> ,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
