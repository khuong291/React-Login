import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import App from "./components/App";
import reducers from "./reducers";
import registerServiceWorker from "./registerServiceWorker";

const store = createStore(reducers, {}, applyMiddleware());

export interface IState {
  userName: string;
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
