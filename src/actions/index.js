import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const ADD_FRIEND = "ADD_FRIEND";
export const ADD_FRIEND_FAILURE = "ADD_FRIEND_FAILURE";


export const login = creds => dispatch => {
    console.log(creds);

    // Login stuff goes here! LOGIN STUFF GOES HERE!
    dispatch({ type: LOGIN_START });

    return axios
      .post("http://localhost:5000/api/login", creds)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        dispatch({ type: LOGIN_SUCCESS });
      })

      .catch(err => {
        dispatch({ type: LOGIN_FAILURE, payload: true });
      });
  };

  export const fetchFriends = () => dispatch => {
    dispatch({ type: FETCHING });
    axios
      .get("http://localhost:5000/api/friends", {
        headers: { Authorization: localStorage.getItem("token") }
      })
      .then(res => {
        dispatch({ type: FETCH_SUCCESS, payload: res.data });
      })
      .catch(err => {
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