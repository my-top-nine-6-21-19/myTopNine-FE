import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import FriendsList from "./FriendsList";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        props.token ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

const mapStateToProps = state => {
  return {
    token: state.token
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(PrivateRoute)
);
