import React, { Component } from "react";
import { connect } from "react-redux";
import { login, register } from "../actions";

export class Login extends Component {
  state = {
    username: "",
    password: ""
  };
  render() {

    return (

    localStorage.getItem("token") ? (

      "You Are Already Logged In"

    ) : (

        <div>
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
              placeholder="Enter your password"

            />
            <button onClick={this.login} type="submit">
              {this.props.loggingIn ? <p>Loading...</p> : "Login"}
            </button>
          </form>
        </div>

        <div className="signup-container">
        <h1 className="login-title">Signup</h1>
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
            placeholder="Enter your password"

          />
          <button onClick={this.register} type="submit">
            {this.props.registering ? <p>Loading...</p> : "Sign Up"}
          </button>
        </form>
      </div>
      </div>
      )

    )
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  login = e => {
    e.preventDefault();
    this.props.login(this.state).then(() => this.props.history.push("/"));
  };

  logout = e => {
    e.preventDefault();
    localStorage.removeItem("User");
    this.props.history.push("/")
    // window.location.reload();

  };
  register = e => {
    e.preventDefault();
    this.props.register(this.state).then(() => this.props.history.push("/"));
  };
}

const mapStateToProps = ({ error, loggingIn }) => ({
  error,
  loggingIn
});

export default connect(
  mapStateToProps,
  { login, register }
)(Login);
