import FriendCard from "./FriendCard";
import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { updateFriend, deleteFriend } from "../actions";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

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
      id: "",
      picture: ""
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
        id: "",
        picture: ""
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
            <p>Picture: {this.state.friend.picture}</p>
          </div>

          <div>
            {/* <button
              onClick={() =>
                this.deleteFriend(this.props.match.params.friendId)
              }
            >
              Delete Friend
            </button> */}
            <Tooltip title="Delete">
              <IconButton
                aria-label="Delete"
                onClick={() =>
                  this.deleteFriend(this.props.match.params.friendId)
                }
              >
                <DeleteIcon />
              </IconButton>
            </Tooltip>
            <Button
              variant="outlined"
              color="inherit"
              onClick={() =>
                this.setState(() => ({
                  isUpdating: !this.state.isUpdating,
                  updatedFriend: {
                    name: this.state.friend.name,
                    rank: this.state.friend.rank,
                    description: this.state.friend.description,
                    email: this.state.friend.email,
                    address: this.state.friend.address,
                    id: this.state.friend.id,
                    picture: this.state.friend.picture
                  }
                }))
              }
            >
              Update Friend
            </Button>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <p>Update Friend</p>
          <form>
            <label>Name</label>
            {/* <input
              name="name"
              onChange={this.handleChange}
              type="text"
              value={this.state.updatedFriend.name}
            /> */}
            <TextField
              onChange={this.handleChange}
              value={this.state.updatedFriend.name}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="name"
              name="name"
              autoComplete="name"
              autoFocus
            />

            <label>Rank</label>
            {/* <input
              name="rank"
              type="text"
              onChange={this.handleChange}
              value={this.state.updatedFriend.rank}
            /> */}
            <TextField
              onChange={this.handleChange}
              value={this.state.updatedFriend.rank}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="rank"
              label="rank"
              name="rank"
              autoComplete="rank"
              autoFocus
            />

            <label>Description</label>
            {/* <input
              name="description"
              onChange={this.handleChange}
              type="text"
              value={this.state.updatedFriend.description}
            /> */}
            <TextField
              onChange={this.handleChange}
              value={this.state.updatedFriend.description}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="description"
              label="description"
              name="description"
              autoComplete="description"
              autoFocus
            />

            <label>Email</label>
            {/* <input
              name="email"
              onChange={this.handleChange}
              type="text"
              value={this.state.updatedFriend.email}
            /> */}
            <TextField
              onChange={this.handleChange}
              value={this.state.updatedFriend.email}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="email"
              name="email"
              autoComplete="email"
              autoFocus
            />

            <label>Address</label>
            {/* <input
              name="address"
              onChange={this.handleChange}
              type="text"
              value={this.state.updatedFriend.address}
            /> */}
            <TextField
              onChange={this.handleChange}
              value={this.state.updatedFriend.address}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="address"
              label="address"
              name="address"
              autoComplete="address"
              autoFocus
            />

            <label>Picture</label>
            {/* <input
              name="picture"
              onChange={this.handleChange}
              type="text"
              value={this.state.updatedFriend.picture}
            /> */}
            <TextField
              onChange={this.handleChange}
              value={this.state.updatedFriend.picture}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="picture"
              label="picture"
              name="picture"
              autoComplete="picture"
              autoFocus
            />
            <label>Picture URL</label>
            <input
              name="picture"
              onChange={this.handleChange}
              type="text"
              value={this.state.updatedFriend.picture}
            />
          </form>

          <Button
            variant="outlined"
            color="inherit"
            onClick={() => this.updateFriend(this.state.updatedFriend)}
          >
            Save Changes
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            onClick={() =>
              this.setState(() => ({ isUpdating: !this.state.isUpdating }))
            }
          >
            Cancel
          </Button>
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
