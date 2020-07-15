import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Auxiliary from "../Auxiliary/Auxiliary";
import Toolbar from "../../components/Toolbar/Toolbar";
import classes from "./Layout.module.css";
import * as actions from "../../store/actions/index";
import Login from "../../containers/Login/Login";

class Layout extends Component {
  render() {
    let loggedInRedirect = this.props.session.isLoggedIn ? (
      <Redirect to="/employee" />
    ) : null;
    return (
      <Auxiliary>
        {loggedInRedirect}
        <Toolbar
          handleLogout={this.props.handleLogout}
          session={this.props.session}
        />
        <main className={classes.Content}>{this.props.children}</main>
        <Route
          path="/login"
          exact
          render={() => (
            <Login
              handleLogin={this.props.handleLogin}
              session={this.props.session}
            />
          )}
        />
      </Auxiliary>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    session: state.session,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleLogin: (loginObj) => dispatch(actions.loginAsync(loginObj)),
    handleLogout: () => dispatch(actions.logoutAsync()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
