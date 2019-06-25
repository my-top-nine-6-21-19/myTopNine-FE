import axios from "axios";

export const FETCHING = "FETCHING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const ADD_FRIEND = "ADD_FRIEND";
export const ADD_FRIEND_FAILURE = "ADD_FRIEND_FAILURE";

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
      console.log(res.data.token);
      localStorage.setItem("token", res.data.token);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
    })

    .catch(err => {
      console.log(err);
      dispatch({ type: LOGIN_FAILURE, payload: true });
    });
};

export const fetchFriends = () => dispatch => {
  dispatch({ type: FETCHING });
  axios
    .get("https://tom-my-top-nine.herokuapp.com/users/1", {
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
    .post("", newFriend, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      console.log("new friends array", res.data);
      dispatch({ type: ADD_FRIEND, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ADD_FRIEND_FAILURE, payload: err.response });
    });
};
