

const initialState = {
    friends: [],
    loggingIn: false,
    error: null,
    loading: true,
    token: localStorage.getItem("token")
  };

  function reducer(state = initialState, action) {
    switch (action.type) {
      case FETCH_FAILURE:
        return {
          ...state,
          isFetching: false,
          error: 'Uh oh... failed to fetch 😵!'
        };
      case FETCHING:
        return {
          ...state,
          loading: true
        };
      case FETCH_SUCCESS:
        return {
          ...state,
          false: false,
          friends: action.payload
        };
        case LOGIN_START:
          return {
            ...state,
            loggingIn: true
          };
        case LOGIN_SUCCESS:
          return {
            ...state,
            loggingIn: false
          }
      default:
        return state;
    }
  }