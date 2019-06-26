import React from "react";
import { connect } from "react-redux";
// import Loader from "react-loader-spinner";
// import { Form, Input } from "reactstrap";
import { Link } from "react-router-dom";
import { fetchFriends, addFriend } from "../actions";
import FriendCard from "./FriendCard";
import _ from "underscore";

class FriendsList extends React.Component {
  state = {
    friends: []
  };
  // console.log()
  render() {
    return (
      <div className="friends-wrapper">
        <h1>Top 9 List</h1>
        {this.props.loading || !this.state.friends || !this.props.friends ? (
          //   <div className="loader">
          //     {/* <Loader type="Grid" color="#fb553b" height={200} width={200} /> */}
          //   </div>
          <p>Loading...</p>
        ) : (
          <>
            {this.props.friends
              .filter(friend => {
                return friend.rank > 0 && friend.rank < 10;
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
    // const filteredFriends = this.props.friends.filter(
    //   friend => friend.rank === 1
    // );
    // console.log("filtered:", filteredFriends);
  }
}

const shortid = require("shortid");

const mapStateToProps = state => ({
  friends: state.friends,
  loading: state.loading,
  currentUser: state.currentUser
});

export default connect(
  mapStateToProps,
  {
    fetchFriends,
    addFriend
  }
)(FriendsList);

{
  /* .sort(function(a, b) {
  return b.name - a.name;
}) */
}
