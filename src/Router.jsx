import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import store from "./store";
import Signup from "./views/signUpView/signUpView";
import Login from './views/LoginView/LoginView';
import AppPage from "./components/homeComponent/homeComponent";
import NavBar from "./components/NavBar/NavBar";
import NotFound from './components/NotFound/NotFound'
import 'react-toastify/dist/ReactToastify.min.css'

const Routes = () => (
  <Router>
    <Provider store={store}>
      <NavBar />
      <ToastContainer position='top-center' autoClose={3000} />
      <Switch>
        <Route path="/" component={AppPage} exact />
        <Route path="/signup" component={Signup} exact />
        <Route path="/login" component={Login} exact />
        <Route path='*' component={NotFound} exact />
      </Switch>
    </Provider>
  </Router>
);
export default Routes;
