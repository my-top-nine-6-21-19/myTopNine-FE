import React, { Component } from 'react'

export class FriendCard extends Component {
    render() {
        return (
            <div>
             <p>Friend</p>
             <div className="card">
                <img
                  className="friend-image"
                  src={friend.image}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h1>{friend.name}</h1>
                  <h3>{friend.email}</h3>
                </div>
              </div>
            </div>
        )
    }
}

export default <p>Friend</p>FriendCard
