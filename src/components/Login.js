import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../actions";

export class Login extends Component {
  state = {
    username: "",
    password: ""
  };
  render() {
    return (
      <div className="login-container">
        <h1 className="login-title">Login</h1>
        <form>
          <label>Username</label>
          <input
            name="username"
            onChange={this.handleChange}
            type="text"
            placeholder="Enter your username"
          />

          <label>Password</label>
          <input
            name="password"
            type="password"
            onChange={this.handleChange}

          />
          <button onClick={this.login} type="submit">
            {this.props.loggingIn ? <p>Loading...</p> : "Login"}
          </button>
        </form>
      </div>
    );
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  // login = e => {
  //   e.preventDefault();
  //   localStorage.setItem("User", this.state.username);
  //   window.location.reload();
  // };

  login = e => {
    e.preventDefault();
    this.props.login(this.state).then(() => this.props.history.push("/"));
  };

  logout = e => {
    e.preventDefault();
    localStorage.removeItem("User");
    window.location.reload();
  };
}

const mapStateToProps = ({ error, loggingIn }) => ({
  error,
  loggingIn
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
