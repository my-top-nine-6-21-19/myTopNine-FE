import FriendCard from "./FriendCard";
import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { updateFriend, deleteFriend } from "../actions";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
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
      phone: "",
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
        <div className="fp-container">
          {/* Main Friend View (NOT UPDATING) */}
          <div className="fp-details-view">
            {/* Heading */}
            <div className="fp-details-heading">
          <img src={this.state.friend.picture} alt="avatar" />
          <div className="fp-heading-right">
          <h1>{this.state.friend.name}</h1>
          <div>
          <Tooltip title="Edit">
              <IconButton
                aria-label="Edit"
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
                <EditIcon fontSize="large"  />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete">
              <IconButton
                aria-label="Delete"
                onClick={() =>
                  this.deleteFriend(this.props.match.params.friendId)
                }
              >
                <DeleteIcon color='error' fontSize="large" />
              </IconButton>
            </Tooltip>

          </div>

          </div>
          {/* Details */}
          </div>
          <div className="fp-details-body">
            <div className="fp-details-left">
              <p><span>Rank:</span> {this.state.friend.rank}</p>
              <p><span>Email:</span> {this.state.friend.email}</p>
              <p><span>Address:</span> {this.state.friend.address}</p>
              <p><span>Phone:</span> {this.state.friend.phone}</p>
            </div>
            <div className="fp-details-right">
              <p><span>Description:</span> {this.state.friend.description}</p>
              <p><span>Picture:</span> {this.state.friend.picture}</p>
            </div>
          </div>
        </div>

        </div>
      );
    } else {
      return (
        <div>
          <p>Update Friend</p>
          <form>
            {/* <input
              name="name"
              onChange={this.handleChange}
              type="text"
              value={this.state.updatedFriend.name}
            /> */}
            <TextField
              style={{ width: 400, margin: 25 }}
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

            {/* <input
              name="rank"
              type="text"
              onChange={this.handleChange}
              value={this.state.updatedFriend.rank}
            /> */}
            <TextField
              style={{ width: 400, margin: 25 }}
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

            {/* <input
              name="description"
              onChange={this.handleChange}
              type="text"
              value={this.state.updatedFriend.description}
            /> */}
            <TextField
              style={{ width: 400, margin: 25 }}
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

            {/* <input
              name="email"
              onChange={this.handleChange}
              type="text"
              value={this.state.updatedFriend.email}
            /> */}
            <TextField
              style={{ width: 400, margin: 25 }}
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

            {/* <input
              name="address"
              onChange={this.handleChange}
              type="text"
              value={this.state.updatedFriend.address}
            /> */}
            <TextField
              style={{ width: 400, margin: 25 }}
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

            {/* <input
              name="picture"
              onChange={this.handleChange}
              type="text"
              value={this.state.updatedFriend.picture}
            /> */}
            <TextField
              style={{ width: 400, margin: 25 }}
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
            {/* <label>Picture URL</label>
            <input
              name="picture"
              onChange={this.handleChange}
              type="text"
              value={this.state.updatedFriend.picture}
            /> */}
          </form>

          <Button
            style={{ width: 150, margin: 25 }}
            variant="outlined"
            color="inherit"
            onClick={() => this.updateFriend(this.state.updatedFriend)}
          >
            Save Changes
          </Button>
          <Button
            style={{ width: 150, margin: 25 }}
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
