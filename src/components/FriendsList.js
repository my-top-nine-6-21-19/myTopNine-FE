import React from "react";
import { connect } from "react-redux";
// import Loader from "react-loader-spinner";
// import { Form, Input } from "reactstrap";
import { Link } from "react-router-dom";
import { fetchFriends, addFriend } from "../actions";
import FriendCard from "./FriendCard";

class FriendsList extends React.Component {
  state = {
    friends: [],
    ranked: false
  };
  // console.log()
  render() {
    return (
      <div className="friends-wrapper">

        {/* Login Success Message */}
        {this.props.loginMessage ? (
          <>
            <div className="username-greeting">
              <p>{this.props.loginMessage}</p>
            </div>{" "}
            <h1>Top 9 List</h1>{" "}
          </>
        ) : (
          <h1>Top 9 List</h1>
        )}

        {/* Loading... or Render Friends List */}
        {this.props.loading || !this.state.friends || !this.props.friends ? (
          //   <div className="loader">
          //     {/* <Loader type="Grid" color="#fb553b" height={200} width={200} /> */}
          //   </div>
          <p>Loading...</p>
        ) : this.state.ranked ? (
          <>
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
                      <FriendCard friend={friend} />
                    </Link>
                  </div>
                );
              })}
          </>
        ) : (
          <>
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
                      <FriendCard friend={friend} />
                    </Link>
                  </div>
                );
              })}
          </>
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
