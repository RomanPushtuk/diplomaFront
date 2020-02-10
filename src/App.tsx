import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Header } from "./common/components/Header";
import { getByLocalStorage } from "./common/servises";
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
import "./css/materialdesignicons.min.css";

interface State {
  isAuthorized: boolean;
}

class App extends Component<any, State> {
  state = {
    isAuthorized: false
  };

  componentDidMount() {
    getByLocalStorage("TOKEN").then((token: any) => {
      this.setState({ isAuthorized: true });
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Header isAuthorized={this.state.isAuthorized} />
        <Switch>
          <Route exact path="/section/:sectionId" component={Section} />
          <Route exact path="/lecture/:lectureId" component={Lecture} />
          <Route exact path="/blog/:postId" component={BlogDetail} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/profile" component={Profile} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
