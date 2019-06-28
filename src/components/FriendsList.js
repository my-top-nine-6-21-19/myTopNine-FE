import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";
import { fetchFriends, addFriend } from "../actions";
import FriendCard from "./FriendCard";

class FriendsList extends React.Component {
  state = {
    friends: [],
    ranked: true
  };

  render() {
    return (
      <div className="friends-wrapper">

        {/* Logic for Header with Title, Toggle Button, Successfull Greeting */}

        {this.props.loginMessage ? (
          <div className="friends-list-heading">

            <button
              onClick={() =>
                this.setState(() => ({ ranked: !this.state.ranked }))
              }
            >
              {this.state.ranked ? "Switch to All Friends" : "Switch to Top 9"}
            </button>
            <h1>{this.state.ranked ? "Top 9 Friends" : "All Friends"}</h1>
            <div className="username-greeting">
              <p>{this.props.loginMessage}</p>
            </div>
          </div>
        ) : (
          <div className="friends-list-heading">
            <button
              onClick={() =>
                this.setState(() => ({ ranked: !this.state.ranked }))
              }
            >
              {this.state.ranked ? "Switch to All Friends" : "Switch to Top 9"}
            </button>
            <h1>{this.state.ranked ? "Top 9 Friends" : "All Friends"}</h1>
            <div></div>
          </div>
        )}

        {/* Loading... or Render Friends List */}
        {this.props.loading || !this.state.friends || !this.props.friends || !this.props.currentUser ? (
          <div className="loader">
            <Loader type="Rings" color="#somecolor" height={150} width={150} />
          </div>
        ) : // <p>Loading...</p>
        this.state.ranked ? (
          <div className="list-of-friends">
            {this.props.friends
              .filter(friend => {
                return friend.rank > 0 && friend.rank < 10;
              })
              .sort(function(a, b) {
                return a.rank - b.rank;
              })
              .map(friend => {
                return (
                  <div className="map-card" key={shortid.generate()}>
                    <Link
                      to={`/friend/${friend.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <FriendCard friend={friend} ranked={this.state.ranked} />
                    </Link>
                  </div>
                );
              })}
          </div>
        ) : (
          <div className="list-of-friends">
            {this.props.friends
              .sort(function(a, b) {
                return a.rank - b.rank;
              })
              .map(friend => {
                return (
                  <div className="map-card" key={shortid.generate()}>
                    <Link
                      to={`/friend/${friend.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <FriendCard friend={friend} ranked={this.state.ranked} />
                    </Link>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    );
  }

  componentDidMount() {
    this.props.fetchFriends(this.props.currentUser);
  }
}

const shortid = require("shortid");

const mapStateToProps = state => ({
  friends: state.friends,
  loading: state.loading,
  currentUser: state.currentUser,
  loginMessage: state.loginMessage
});

export default connect(
  mapStateToProps,
  {
    fetchFriends,
    addFriend
  }
)(FriendsList);
