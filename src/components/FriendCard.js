import React, { Component } from "react";

export class FriendCard extends Component {
  render() {
    return (
      <div>
        <p>Friend</p>
        <div className="card">
          <div className="card-body">
            <h1>{friend.name}</h1>
            <h3>{friend.contact}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default FriendCard;
