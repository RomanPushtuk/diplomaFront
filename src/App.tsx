import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Header } from "./common/components/Header";
import { getByLocalStorage } from "./common/servises";

import "./css/materialdesignicons.min.css";
import {
  Section,
  Login,
  Signup,
  Home,
  Lecture,
  Profile,
  Blog,
  BlogDetail
} from "./modules";
import "./App.scss";

interface State {
  userName: string;
  isAuthorized: boolean;
}

class App extends Component<any, State> {
  state = {
    userName: "",
    isAuthorized: false
  };

  componentDidMount(): void {
    const userName: any = localStorage.getItem("USER_NAME");

    this.setState({ userName: JSON.parse(userName) });
  }

  handleAuthorized = (isAuthorized: boolean) => {
    const userName: any = localStorage.getItem("USER_NAME");

    this.setState({ isAuthorized, userName: JSON.parse(userName) });
  };

  render() {
    const { userName, isAuthorized } = this.state;

    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/section/:sectionId"
            render={routerProps => (
              <>
                <Header userName={userName} isAuthorized={isAuthorized} />
                <Section {...routerProps} />
              </>
            )}
          />
          <Route
            exact
            path="/lecture/:lectureId"
            render={routerProps => (
              <>
                <Header userName={userName} isAuthorized={isAuthorized} />
                <Lecture {...routerProps} />
              </>
            )}
          />
          <Route exact path="/blog/:postId">
            <>
              <Header userName={userName} isAuthorized={isAuthorized} />
              <BlogDetail />
            </>
          </Route>
          <Route exact path="/blog">
            <>
              <Header userName={userName} isAuthorized={isAuthorized} />
              <Blog />
            </>
          </Route>
          <Route
            exact
            path="/login"
            render={({ history }) => (
              <Login history={history} onAuthorized={this.handleAuthorized} />
            )}
          />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/profile" component={Profile} />
          <Route path="/">
            <>
              <Header userName={userName} isAuthorized={isAuthorized} />
              <Home />
            </>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
