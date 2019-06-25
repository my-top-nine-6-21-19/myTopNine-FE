import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import FriendsList from "./FriendsList";

const PrivateRoute = ({ component: Component, token, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem("token") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
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

// props.token;
