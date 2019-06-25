import React from "react";
import { connect } from "react-redux";
// import Loader from "react-loader-spinner";
// import { Form, Input } from "reactstrap";
// import { Link } from 'react-router-dom'
import { fetchFriends, addFriend } from "../actions";

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
              <div className="card">
                <div className="card-body">
                  <h1>{friend.name}</h1>
                  <h3>{friend.description}</h3>
                  <h3>{friend.contact}</h3>
                </div>
              </div>
              //   <Link path={/uniqueid} ><FriendCard /></Link>
              //   FRIEND CARD COMPONENT
            ))}
          </>
        )}
      </div>
    );
  }
  componentDidMount() {
    this.props.fetchFriends();
    console.log(this.props.friends);
  }
}

const mapStateToProps = state => ({
  friends: state.friends,
  loading: state.loading
});

export default connect(
  mapStateToProps,
  {
    fetchFriends,
    addFriend
  }
)(FriendsList);
