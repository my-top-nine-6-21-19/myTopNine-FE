import React, { Component } from "react";
import { connect } from "react-redux";
import { addFriend } from "../actions";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import { withStyles } from "@material-ui/styles";
import AddButton from "./AddButton";

const styles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(2)
  },
  absolute: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(3)
  }
}));

// export class AddFriend extends Component {
//   state = {
//     name: "",
//     rank: "",
//     email: "",
//     phone: "",
//     address: "",
//     description: "",
//     picture: ""
//   };

//   render() {
//     return (
//       <div className="form-container">
//         <h1>Add a Friend</h1>
//         <form className="friend-form">
//           <div className="add-input">
//             <input
//               placeholder="Your friend's name"
//               name="name"
//               value={this.state.name}
//               className="login-input"
//               onChange={this.handleChanges}
//             />
//           </div>
//           <div className="add-input">
//             <input
//               placeholder="Your friend's rank"
//               name="rank"
//               value={this.state.rank}
//               className="login-input"
//               onChange={this.handleChanges}
//             />
//           </div>
//           <div className="add-input">
//             <input
//               placeholder="Your friend's email"
//               name="email"
//               value={this.state.email}
//               className="login-input"
//               onChange={this.handleChanges}
//             />
//           </div>
//           <div className="add-input">
//             <input
//               placeholder="Your friend's Telphone Number#"
//               name="phone"
//               value={this.state.phone}
//               className="login-input"
//               onChange={this.handleChanges}
//             />
//           </div>
//           <div className="add-input">
//             <input
//               placeholder="Your friend's Address"
//               name="address"
//               value={this.state.address}
//               className="login-input"
//               onChange={this.handleChanges}
//             />
//           </div>
//           <div className="add-input">
//             <input
//               placeholder="Your friend's description"
//               name="description"
//               value={this.state.description}
//               className="login-input"
//               onChange={this.handleChanges}
//             />
//           </div>
//           <div className="add-input">
//             <input
//               placeholder="Your friend's picture"
//               name="picture"
//               value={this.state.picture}
//               className="login-input"
//               onChange={this.handleChanges}
//             />
//           </div>
//           <div>
//             <div>
//               <button className="btn-login shd" onClick={this.addFriend}>
//                 Make A Friend
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     );
//   }
//   handleChanges = e => {
//     e.preventDefault();
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };

//   addFriend = e => {
//     e.preventDefault();
//     const newFriend = {
//       name: this.state.name,
//       rank: this.state.rank,
//       email: this.state.email,
//       phone: this.state.phone,
//       address: this.state.address,
//       description: this.state.description,
//       picture: this.state.picture,
//       users_id: this.props.currentUser
//     };
//     console.log("NEW:", newFriend);

//     this.props.addFriend(newFriend);
//     this.setState({
//       name: "",
//       rank: "",
//       email: "",
//       phone: "",
//       address: "",
//       description: "",
//       picture: ""
//     });
//     this.props.history.push("/");
//     // window.location.reload();
//   };
// }

//MATERIAL UI VERSION BELOW

export class AddFriend extends Component {
  state = {
    name: "",
    rank: "",
    email: "",
    phone: "",
    address: "",
    description: "",
    picture: ""
  };

  render() {
    return (
      <div className="form-container">
        <h1>Add a Friend</h1>
        <form className="friend-form">
          <div className="add-input">
            <TextField
              style={{ width: 400, margin: 25 }}
              onChange={this.handleChanges}
              value={this.state.name}
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

            <TextField
              style={{ width: 400, margin: 25 }}
              onChange={this.handleChanges}
              value={this.state.rank}
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

            <TextField
              style={{ width: 400, margin: 25 }}
              onChange={this.handleChanges}
              value={this.state.email}
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

            <TextField
              style={{ width: 400, margin: 25 }}
              onChange={this.handleChanges}
              value={this.state.phone}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="phone"
              label="phone"
              name="phone"
              autoComplete="phone"
              autoFocus
            />

            <TextField
              style={{ width: 400, margin: 25 }}
              onChange={this.handleChanges}
              value={this.state.address}
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

            <TextField
              style={{ width: 400, margin: 25 }}
              onChange={this.handleChanges}
              value={this.state.description}
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

            <TextField
              style={{ width: 400, margin: 25 }}
              onChange={this.handleChanges}
              value={this.state.picture}
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
          </div>
          {/* <div className="add-input">
            <input
              placeholder="Your friend's Picture"
              name="picture"
              value={this.state.picture}
              className="login-input"
              onChange={this.handleChanges}
            />
          </div> */}
          <div>
            <div>
              {/* <button className="btn-login shd" onClick={this.addFriend}>
                Make A Friend
              </button> */}
              {/* <Tooltip onClick={this.addFriend} title="Add" aria-label="Add">
                <AddIcon />
              </Tooltip> */}
              <AddButton addFriend={this.addFriend} />
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
      picture: this.state.picture,
      users_id: this.props.currentUser
    };
    console.log("NEW:", newFriend);

    this.props.addFriend(newFriend);
    this.setState({
      name: "",
      rank: "",
      email: "",
      phone: "",
      address: "",
      description: "",
      picture: ""
    });
    this.props.history.push("/");
    // window.location.reload();
  };
}

const mapStateToProps = state => ({
  currentUser: state.currentUser
});

export default connect(
  mapStateToProps,
  { addFriend }
)(AddFriend);
