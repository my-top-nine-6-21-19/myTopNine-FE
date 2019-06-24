import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    FETCHING,
    FETCH_SUCCESS,
    FETCH_FAILURE,
    ADD_FRIEND,
    ADD_FRIEND_FAILURE
  } from "../actions";

const initialState = {
    friends: [{"id":2,"name":"Billy","rank":6,"description":"Im your best friend "},
                {"id":3,"name":"Sally","rank":9,"description":"I am your ex-girlfriend"}
             ],
    loggingIn: false,
    error: null,
    loading: false,
    token: localStorage.getItem("token")
  };

  function reducer(state = initialState, action) {
    switch (action.type) {
      case FETCHING:
        return {
          ...state,
          loading: true
        };
        case FETCH_SUCCESS:
        return {
          ...state,
          loading: false,
          friends: action.payload
        };

        case FETCH_FAILURE:
            return {
              ...state,
              loading: false,
              error: action.payload
            };
        case LOGIN_START:
          return {
            ...state,
            loggingIn: true,
            error: false
          };
          case LOGIN_FAILURE:
            return {
              ...state,
              loggingIn: false,
              error: action.payload
            };
        case LOGIN_SUCCESS:
          return {
            ...state,
            loggingIn: false,
            error: false,
            token: localStorage.getItem("token")
          };

          case ADD_FRIEND:
            return {
              ...state,
              friends: action.payload
            // If we have time, add FRIEND SUCCESS MESSAGE IF ADDED SUCCESSFULLY
            };
          case ADD_FRIEND_FAILURE:
            return {
              ...state,
              error: action.payload
            };
      default:
        return state;
    }
  }

  export default reducer;