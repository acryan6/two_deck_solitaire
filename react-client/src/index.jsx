import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { createStore, applyMiddleware } from "redux";
import allReducers from "./reducers";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const store = createStore(
  allReducers,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
