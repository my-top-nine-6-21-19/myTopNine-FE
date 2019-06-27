import React from "react";
import FriendsList from "./components/FriendsList";
import "./App.css";
import { Route, NavLink, withRouter } from "react-router-dom";
import AddFriend from "./components/AddFriend";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import FriendPage from "./components/FriendPage";
import NavBar from "./components/NavBar";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TypoGraphy from "@material-ui/core/Typography";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <NavBar /> */}
        <ul className="navbar">
          <div className="nav-links">
            <li>
              <NavLink exact to="/" activeClassName="activeNavButton">
                My Top Nine
              </NavLink>
            </li>
            <li>
              <NavLink to="/add-friend" activeClassName="activeNavButton">
                Add New Friend!
              </NavLink>
            </li>
            <li
              className={localStorage.getItem("token") ? "hidden" : "login-btn"}
            >
              <NavLink to="/login" activeClassName="activeNavButton">
                Log In
              </NavLink>
            </li>
          </div>

          <div className="logout">
            <li
              className={
                localStorage.getItem("token") ? "logout-btn" : "hidden"
              }
              onClick={this.logout}
            >
              Log Out
            </li>
          </div>
        </ul>
        <Route exact path="/login" render={props => <Login {...props} />} />
        <PrivateRoute exact path="/" component={FriendsList} />
        <PrivateRoute exact path="/add-friend" component={AddFriend} />
        {/* <Route path="/friend-form/${id}" /> */}
        <PrivateRoute exact path="/friend/:friendId" component={FriendPage} />
      </div>
    );
  }
  logout = e => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("currentUser");
    window.location.reload();
  };
}

export default withRouter(App);
