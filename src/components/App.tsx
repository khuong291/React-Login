import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Header from "./Header";
import Login from "./Login";

class App extends React.Component {
  public render() {
    return (
      <div>
        <BrowserRouter>
          <div className="container">
            <Header />
            <Route
              exact={true}
              path="https://khuong291.github.io/React-Login"
              component={Login}
            />
            <Route
              exact={true}
              path="https://khuong291.github.io/React-Login/dashboard"
              component={Dashboard}
            />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
