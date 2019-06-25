import React from "react";
import FriendsList from "./components/FriendsList";
import "./App.css";
import { Route, NavLink, withRouter } from "react-router-dom";
import AddFriend from "./components/AddFriend";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
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
          <li>
            <NavLink to="/login" activeClassName="activeNavButton">
              Log In
            </NavLink>
          </li>
        </div>

        <div className="logout">
          <li className="logout-btn">Log Out</li>
        </div>
      </ul>
      {/* <Route exact path="/" render={props => <FriendsList {...props} />} /> */}
      <Route exact path="/login" render={props => <Login {...props} />} />
      <PrivateRoute exact path="/" component={FriendsList} />
      <Route path="/add-friend" render={props => <AddFriend {...props} />} />
      <Route path="/friend-form/${id}" />
    </div>
  );
}

export default withRouter(App);

{
  /* <PrivateRoute
        exact
        path="/"
        render={props => <FriendsList {...props} />} */
}
