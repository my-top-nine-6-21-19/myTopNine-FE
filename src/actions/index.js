import axios from "axios";

export const FETCHING = "FETCHING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const ADD_FRIEND = "ADD_FRIEND";
export const ADD_FRIEND_FAILURE = "ADD_FRIEND_FAILURE";

export const UPDATE_START = "UPDATE_START";
export const UPDATE_SUCCESS = "UPDATE_SUCCESS";
export const UPDATE_FAILURE = "UPDATE_FAILURE";

export const DELETE_START = "DELETE_START";
export const DELETE_SUCCESS = "DELETE_SUCCESS";
export const DELETE_FAILURE = "DELETE_FAILURE";

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

// export const login = creds => dispatch => {
//     console.log(creds);

//     dispatch({ type: LOGIN_START });
//     return axios
//       .post("http://localhost:5000/api/login", creds)
//       .then(res => {
//         localStorage.setItem("token", res.data.payload);
//         dispatch({ type: LOGIN_SUCCESS });
//       })

//       .catch(err => {
//         dispatch({ type: LOGIN_FAILURE, payload: true });
//       });
//   };

export const login = creds => dispatch => {
  console.log(creds);
  dispatch({ type: LOGIN_START });
  return axios
    .post("https://tom-my-top-nine.herokuapp.com/auth/login", creds)
    .then(res => {
      console.log("LOGIN SUCCESS", res.data);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("currentUser", res.data.id);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log("LOGIN FAILURE", err);
      dispatch({ type: LOGIN_FAILURE, payload: true });
    });
};

export const fetchFriends = id => dispatch => {
  dispatch({ type: FETCHING });
  axios
    .get(`https://tom-my-top-nine.herokuapp.com/users/${id}`, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      console.log(res);
      dispatch({ type: FETCH_SUCCESS, payload: res.data.friends });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCH_FAILURE, payload: err });
    });
};
export const addFriend = newFriend => dispatch => {
  axios
    .post("https://tom-my-top-nine.herokuapp.com/friends", newFriend, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      console.log("new friends array", res.data);
      dispatch({ type: ADD_FRIEND, payload: res.data.friends });
    })
    .catch(err => {
      console.log(err, newFriend);
      dispatch({ type: ADD_FRIEND_FAILURE, payload: err.response });
    });
};
export const updateFriend = updatedFriend => dispatch => {
  dispatch({ type: UPDATE_START });
  axios
    .put(
      `https://tom-my-top-nine.herokuapp.com/friends/${updatedFriend.id}`,
      updatedFriend,
      {
        headers: { Authorization: localStorage.getItem("token") }
      }
    )
    .then(res => {
      console.log(res);
      dispatch({ type: UPDATE_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: UPDATE_FAILURE, payload: err }));
};

export const deleteFriend = id => dispatch => {
  dispatch({ type: DELETE_START });
  axios
    .delete(`https://tom-my-top-nine.herokuapp.com/friends/${id}`, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      dispatch({ type: DELETE_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: DELETE_FAILURE, payload: err }));
};

export const register = creds => dispatch => {
  console.log(creds);
  dispatch({ type: REGISTER_START });
  return axios
    .post("https://tom-my-top-nine.herokuapp.com/auth/register", creds)
    .then(res => {
      console.log(res.data, "SUCCESFUL REGISTER");
      localStorage.setItem("token", res.data.password);
      localStorage.setItem("currentUser", res.data.id);
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err, "FAILED TO REGISTER");
      dispatch({ type: REGISTER_FAILURE, payload: true });
    });
};
