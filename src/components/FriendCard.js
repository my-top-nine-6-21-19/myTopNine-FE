import React, { Component } from "react";

export class FriendCard extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <div className="card-body">
            <h1>{this.props.friend.name}</h1>
            <h4 className="card-rank">{this.props.friend.rank}</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default FriendCard;
