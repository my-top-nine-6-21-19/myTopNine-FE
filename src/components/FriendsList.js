import React from "react";
import { connect } from "react-redux";
// import Loader from "react-loader-spinner";
// import { Form, Input } from "reactstrap";
import { Link } from "react-router-dom";
import { fetchFriends, addFriend } from "../actions";
import FriendCard from "./FriendCard";

class FriendsList extends React.Component {
  state = {
    friends: []
  };
  // console.log()
  render() {
    return (
      <div className="friends-wrapper">
        <h1>Top 9 List</h1>
        {this.props.loading ? (
          //   <div className="loader">
          //     {/* <Loader type="Grid" color="#fb553b" height={200} width={200} /> */}
          //   </div>
          <p>Loading...</p>
        ) : (
          <>
            {this.props.friends.map(friend => (

              <div className="card" key={shortid.generate()}>
                 <Link to={`/${friend.id}`} style={{ textDecoration: "none" }}>
                  <FriendCard friend={friend} />
                </Link>

              </div>

            ))}
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
  currentUser: state.currentUser
});

export default connect(
  mapStateToProps,
 {
    fetchFriends,
    addFriend,
  }
)(FriendsList);






{/* <Link to={{
  pathname: `/${friend.id}`,
  state: {
    friend: friend
  }
}} style={{ textDecoration: "none" }}>
                  <FriendCard friend={friend} />
                </Link> */}



