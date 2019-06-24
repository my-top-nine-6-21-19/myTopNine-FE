import React, { Component } from 'react'

export class AddFriend extends Component {
    state = {
        name: "",
        rank: "",
        contact: "",
        description: ""
      };

    render() {
        return (
            <div className="form-container">
               <form className="friend-form">
              <div>
                <input
                  placeholder="Your friend's name"
                  name="name"
                  value={this.state.name}
                  className="login-input"
                  onChange={this.handleChanges}
                />

              </div>
              <div>
                <input
                  placeholder="Your friend's rank"
                  name="email"
                  value={this.state.email}
                  className="login-input"
                  onChange={this.handleChanges}
                />

              </div>
              <div>
                <input
                  placeholder="Your friend's contact info"
                  name="contact"
                  value={this.state.contact}
                  className="login-input"
                  onChange={this.handleChanges}
                />
              </div>
              <div>
                <input
                  placeholder="Your friend's description"
                  name="description"
                  value={this.state.description}
                  className="login-input"
                  onChange={this.handleChanges}
                />

              </div>
              <div>
                <div >
                  <button className="btn-login shd" onClick={this.addFriend}>Make A Friend</button>
                </div>
              </div>
            </form>
            </div>
        )
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
          contact: this.state.contact,
          description: this.state.description
        };
        this.props.addFriend(newFriend);
      };
}

export default AddFriend
