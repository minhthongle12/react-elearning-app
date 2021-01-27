import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import { connect } from "react-redux";
import { createAction } from "./redux/actions";
import { SET_TOKEN } from "./redux/actions/type";
import Detail from "./pages/Detail";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/signin" component={Signin} />
          <Route path="/detail/:courseId" component={Detail} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }

  componentDidMount() {
    const token = localStorage.getItem("t");

    if (token) {
      this.props.dispatch(createAction(SET_TOKEN, token));
    }
  }
}
export default connect()(App);
