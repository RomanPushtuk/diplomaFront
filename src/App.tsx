import React, { Component, ReactNode } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Header } from "./common/components/Header";

import "./css/materialdesignicons.min.css";
import "./App.scss";

import { PATHS } from "./constants";

class App extends Component {
  state = {
    isAuthorized: false
  };

  handleExit = () => {
    this.setState({});
  };

  renderRoutes(): ReactNode {
    return PATHS.map(({ path, exact, component: Page, header }, index) => {
      return (
        <Route
          key={index}
          exact={exact}
          path={path}
          render={routeProps => (
            <>
              {header && <Header {...routeProps} />}
              <Page key={index} {...routeProps} />
            </>
          )}
        />
      );
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>{this.renderRoutes()}</Switch>
      </BrowserRouter>
    );
  }
}

export default App;
