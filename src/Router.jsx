import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Signup from "./views/signUpView/signUpView";
import AppPage from "./components/homeComponent/homeComponent";
import NavBar from "./components/NavBar/NavBar";

const Routes = () => (
  <Router>
    <Provider store={store}>
      <NavBar />
      <Switch>
        <Route path="/" component={AppPage} exact />
        <Route path="/signup" component={Signup} exact />
      </Switch>
    </Provider>
  </Router>
);
export default Routes;
