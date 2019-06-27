import FriendCard from "./FriendCard";
import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { updateFriend, deleteFriend } from "../actions";
export class FriendPage extends Component {
  state = {
    friend: null,
    id: null,
    isUpdating: false,
    updatedFriend: {
      name: "",
      rank: "",
      description: "",
      email: "",
      address: "",
      id: ""
    }
  };
  componentDidMount() {
    // console.log("STATE HERE", this.state.friend)
    console.log(this.props.match.params.friendId);
    this.fetchFriend(this.props.match.params.friendId);
  }

  handleChange = e => {
    this.setState({
      ...this.state,
      updatedFriend: {
        ...this.state.updatedFriend,
        [e.target.name]: e.target.value
      }
    });
  };

  deleteFriend = id => {
    this.props.deleteFriend(id);
    this.props.history.push("/");
  };

  updateFriend = updatedFriend => {
    console.log("IN FRIENDPAGE", updatedFriend);
    this.props.updateFriend(updatedFriend);
    this.fetchFriend(this.props.match.params.friendId);
    this.props.history.push(`${this.state.friend.id}`);
    this.setState(() => ({
      isUpdating: false,
      updatedFriend: {
        name: "",
        rank: "",
        description: "",
        email: "",
        address: "",
        id: ""
      }
    }));
  };

  fetchFriend = id => {
    axios
      .get(`https://tom-my-top-nine.herokuapp.com/friends/${id}`, {
        headers: { Authorization: localStorage.getItem("token") }
      })
      .then(response => {
        console.log("FETCH IN FRIENDS PAGE", response);
        this.setState(() => ({ friend: response.data }));
      })
      .catch(error => {
        console.error("OH NO AN ERROR HAPPENED", error);
      });
  };
  render() {
    if (!this.state.friend) {
      return <p>Loading...</p>;
    } else if (!this.state.isUpdating) {
      return (
        <div className="friend-page-container">
          <h1>{this.state.friend.name}</h1>
          <div>
            <p>Rank: {this.state.friend.rank}</p>
            <p>Description: {this.state.friend.description}</p>
            <p>Email: {this.state.friend.email}</p>
            <p>Address: {this.state.friend.address}</p>
          </div>

          <div>
            <button
              onClick={() =>
                this.deleteFriend(this.props.match.params.friendId)
              }
            >
              Delete Friend
            </button>
            <button
              onClick={() =>
                this.setState(() => ({
                  isUpdating: !this.state.isUpdating,
                  updatedFriend: {
                    name: this.state.friend.name,
                    rank: this.state.friend.rank,
                    description: this.state.friend.description,
                    email: this.state.friend.email,
                    address: this.state.friend.address,
                    id: this.state.friend.id
                  }
                }))
              }
            >
              Update Friend
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <p>Update Friend</p>
          <form>
            <label>Name</label>
            <input
              name="name"
              onChange={this.handleChange}
              type="text"
              value={this.state.updatedFriend.name}
            />

            <label>Rank</label>
            <input
              name="rank"
              type="text"
              onChange={this.handleChange}
              value={this.state.updatedFriend.rank}
            />
            <label>Description</label>
            <input
              name="description"
              onChange={this.handleChange}
              type="text"
              value={this.state.updatedFriend.description}
            />
            <label>Email</label>
            <input
              name="email"
              onChange={this.handleChange}
              type="text"
              value={this.state.updatedFriend.email}
            />
            <label>Address</label>
            <input
              name="address"
              onChange={this.handleChange}
              type="text"
              value={this.state.updatedFriend.address}
            />
          </form>

          <button onClick={() => this.updateFriend(this.state.updatedFriend)}>
            Save Changes
          </button>
          <button
            onClick={() =>
              this.setState(() => ({ isUpdating: !this.state.isUpdating }))
            }
          >
            {" "}
            Cancel
          </button>
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

export default connect(
  mapStateToProps,
  {
    updateFriend,
    deleteFriend
  }
)(FriendPage);
