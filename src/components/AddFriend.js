import React, { Component } from "react";
import { connect } from "react-redux";
import {addFriend} from '../actions';

export class AddFriend extends Component {
  state = {
    name: "",
    rank: "",
    email: "",
    phone: "",
    address: "",
    description: ""
  };

  render() {
    return (
      <div className="form-container">
        <h1>Add a Friend</h1>
        <form className="friend-form">
          <div className="add-input">
            <input
              placeholder="Your friend's name"
              name="name"
              value={this.state.name}
              className="login-input"
              onChange={this.handleChanges}
            />
          </div>
          <div className="add-input">
            <input
              placeholder="Your friend's rank"
              name="rank"
              value={this.state.rank}
              className="login-input"
              onChange={this.handleChanges}
            />
          </div>
          <div className="add-input">
            <input
              placeholder="Your friend's email"
              name="email"
              value={this.state.email}
              className="login-input"
              onChange={this.handleChanges}
            />
          </div>
          <div className="add-input">
            <input
              placeholder="Your friend's Telphone Number#"
              name="phone"
              value={this.state.phone}
              className="login-input"
              onChange={this.handleChanges}
            />
          </div>
          <div className="add-input">
            <input
              placeholder="Your friend's Address"
              name="address"
              value={this.state.address}
              className="login-input"
              onChange={this.handleChanges}
            />
          </div>
          <div className="add-input">
            <input
              placeholder="Your friend's description"
              name="description"
              value={this.state.description}
              className="login-input"
              onChange={this.handleChanges}
            />
          </div>
          <div>
            <div>
              <button className="btn-login shd" onClick={this.addFriend}>
                Make A Friend
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
  handleChanges = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addFriend = e => {
    e.preventDefault();
    const newFriend = {
      name: this.state.name,
      rank: this.state.rank,
      email: this.state.email,
      phone: this.state.phone,
      address: this.state.address,
      description: this.state.description,
      user_id: this.props.currentUser
    };
    this.props.addFriend(newFriend);
  };
}

const mapStateToProps = state => ({
  currentUser: state.currentUser
});


export default connect(
  mapStateToProps,
 {addFriend}
)(AddFriend);
