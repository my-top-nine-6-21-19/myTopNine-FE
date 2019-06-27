import React, { Component } from "react";
import { connect } from "react-redux";
import { login, register } from "../actions";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SignInSide from "./SideSignIn";
import CssBaseline from "@material-ui/core/CssBaseline";

export class Login extends Component {
  state = {
    username: "",
    password: "",
    showLog: true
  };
  render() {
    return (
      <div>
        <h1>{this.state.showLog ? "Welcome Back!" : "Join Us Today!"}</h1>
        <button
          onClick={() =>
            this.setState(() => ({ showLog: !this.state.showLog }))
          }
        >
          {this.state.showLog ? "Sign Up Now" : "Log In"}
        </button>

        {this.state.showLog ? (
          // <SignInSide />

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

              {/* <TextField
                onChange={this.handleChange}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
              />
              <TextField
                onChange={this.handleChange}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              /> */}

              <label>Password</label>
              <input
                name="password"
                type="password"
                onChange={this.handleChange}
                placeholder="Enter your password"
              />
              {/* <button onClick={this.login} type="submit">
                {this.props.loggingIn ? <p>Loading...</p> : "Login"}
              </button> */}
              <Button variant="outlined" color="inherit" onClick={this.login}>
                {this.props.loggingIn ? <p>Loading...</p> : "Login"}
              </Button>
            </form>
          </div>
        ) : (
          <div className="signup-container">
            <h1 className="signup-title">Signup</h1>
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
              {/* <button onClick={this.register} type="submit">
                {this.props.registering ? <p>Loading...</p> : "Sign Up"}
              </button> */}
              <Button
                variant="outlined"
                color="inherit"
                onClick={this.register}
              >
                {this.props.registering ? <p>Loading...</p> : "Sign Up"}
              </Button>
            </form>
          </div>
        )}
      </div>
    );
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
    this.props.history.push("/");
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
