import React, { Component } from "react";

export class FriendCard extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <div className="card-body">
            <h1>{this.props.friend.name}</h1>
            <h3>{this.props.friend.description}</h3>
            <h3>{this.props.friend.contact}</h3>
          </div>
          <h4 className="card-rank">{this.props.friend.rank}</h4>
        </div>
      </div>
    );
  }
}

export default FriendCard;
