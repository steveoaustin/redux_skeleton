import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import * as serviceWorker from "./serviceWorker";
import "./index.scss";
import App from "./app/App";

const middleware = applyMiddleware(thunk, logger);
const store = createStore(rootReducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
