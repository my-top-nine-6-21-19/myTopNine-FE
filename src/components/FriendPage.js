import FriendCard from "./FriendCard";
import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

export class FriendPage extends Component {
  state = {
    friend: null

  };
  componentDidMount() {
    console.log(this.props.match)
    const id = this.props.match.params.friendId;
    this.fetchMovie(id);
  }

  fetchMovie = id => {
    axios
      .get(`https://tom-my-top-nine.herokuapp.com/friends/${id}`)
      .then(response => {
        this.setState(() => ({ friend: response.data }));
      })
      .catch(error => {
        console.error(error);
      });
  };
  render() {
    if(!this.state.friend){
      return (
        <p>Loading...</p>

      )
    } else {
      return (
        <div>

          <FriendCard friend={this.state.friend} />

        </div>
      );

    }
  }
}
// console.log(this.props.location.state)

const mapStateToProps = state => ({
  friends: state.friends,
  loading: state.loading,
  currentUser: state.currentUser
});

export default connect(mapStateToProps,{})(FriendPage);
