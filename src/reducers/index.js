import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  FETCHING,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  ADD_FRIEND,
  ADD_FRIEND_FAILURE,
  UPDATE_START,
  UPDATE_SUCCESS,
  UPDATE_FAILURE,
  DELETE_START,
  DELETE_SUCCESS,
  DELETE_FAILURE,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE
} from "../actions";

const initialState = {
  friends: [],
  loggingIn: false,
  error: null,
  loading: false,
  token: localStorage.getItem("token"),
  currentUser: localStorage.getItem("currentUser"),
  isUpdating: false,
  isDeleting: false
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
        token: action.payload.token,
        currentUser: action.payload.id
      };

    case ADD_FRIEND:
      return {
        ...state,
        friends: [...state.friends, ...action.payload]
      };
    case ADD_FRIEND_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case DELETE_START:
      return {
        ...state,
        isDeleting: true
      };
    case DELETE_SUCCESS:
      return {
        ...state,
        friends: action.payload,
        isDeleting: false,
        error: null
      };
    case DELETE_FAILURE:
      return {
        ...state,
        isDeleting: false,
        error: action.payload
      };
    case UPDATE_START:
      return {
        ...state,
        isUpdating: true
      };
    case UPDATE_SUCCESS:
      return {
        ...state,
        isUpdating: false,
        friends: [...state.friends, action.payload],
        error: null
      };
    case UPDATE_FAILURE:
      return {
        ...state,
        isUpdating: false,
        error: action.payload
      };
    case REGISTER_START:
      return {
        ...state,
        loggingIn: true
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        error: null
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        loggingIn: false,
        error: action.payload
      };

    default:
      return state;
  }
}

export default reducer;
