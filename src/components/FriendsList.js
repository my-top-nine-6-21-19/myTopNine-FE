import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";
import { fetchFriends, addFriend } from "../actions";
import FriendCard from "./FriendCard";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Dropdown from "./Dropdown";

class FriendsList extends React.Component {
  state = {
    friends: [],
    ranked: true
  };

  render() {
    return (
      <div className="friends-wrapper">
        {/* <Grid item xs={12}>
          <ButtonGroup fullWidth aria-label="Full width outlined button group">
            <Button onClick={() => this.setState(() => ({ ranked: true }))}>
              Top 9
            </Button>
            <Button onClick={() => this.setState(() => ({ ranked: false }))}>
              All Friends
            </Button>
          </ButtonGroup>
        </Grid> */}
        <Dropdown setRanked={this.setRankedTrue} />


        {/* Logic for Header with Title,  */}

        <div className="friends-list-heading">
            <h1>{this.state.ranked ? "Top 9 Friends" : "All Friends"}</h1>
        </div>

        {/* Loading... or Render Friends List */}
        {this.props.loading ||
        !this.state.friends ||
        !this.props.friends ||
        !this.props.currentUser ? (
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

  setRankedTrue = (event, index) => {
    if (index === 0) {
      this.setState(() => ({ ranked: true }));
    } else if (index === 1) {
      this.setState(() => ({ ranked: false }));
    }
  };

  setRankedFalse = () => {
    this.setState(() => ({ ranked: false }));
  };

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
