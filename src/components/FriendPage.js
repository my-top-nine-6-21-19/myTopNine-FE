import FriendCard from "./FriendCard";
import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { updateFriend, deleteFriend } from '../actions'
export class FriendPage extends Component {
  state = {
    friend: null,
    id: null
  };
  componentDidMount() {
    // this.setState({...this.state.friends, id: this.props.match.params.friendId})
    // console.log("STATE HERE", this.state.friend)
    console.log(this.props.match.params.friendId)
    this.fetchFriend(this.props.match.params.friendId);
  }

  deleteFriend = id => {

    this.props.deleteFriend(id);
    // check below syntax
    this.props.history.push('/')
}

  fetchFriend = id => {
    axios
      .get(`https://tom-my-top-nine.herokuapp.com/friends/${id}`, {
        headers: { Authorization: localStorage.getItem("token") }
      })
      .then(response => {
        console.log(response)
        this.setState(() => ({ friend: response.data }));
      })
      .catch(error => {
        console.error("OH NO AN ERROR HAPPENED", error);
      });
  };
  render() {

    if(!this.state.friend){
      return (
        <p>Loading...ggggggggg</p>

      )
    } else {
      return (
        <div>
          {this.state.friend.name}
          {/* <FriendCard friend={this.state.friend} /> */}



          <div>
          <button onClick={()=>this.deleteFriend(this.props.match.params.friendId)}>Delete Friend</button>
          </div>
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

export default connect(mapStateToProps,{
  updateFriend, deleteFriend
})(FriendPage);
