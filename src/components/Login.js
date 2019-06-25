import React, { Component } from "react";

export class Login extends Component {
  state = {
    username: "",
    password: "",
    loggedIn: null
  };
  render() {
    return (
      <div className="login-container">
        <h1 className="login-title">Login to My Top Nine</h1>
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
            placeholder="Enter password"
          />
          <button onClick={this.login} type="submit">
            Login
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

  login = e => {
    e.preventDefault();
    localStorage.setItem("User", this.state.username);
    window.location.reload();
  };

  logout = e => {
    e.preventDefault();
    localStorage.removeItem("User");
    window.location.reload();
  };
}

export default Login;
