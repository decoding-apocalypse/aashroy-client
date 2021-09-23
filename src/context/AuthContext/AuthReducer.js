const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isFetching: true,
        error: false,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        isFetching: false,
        error: action.payload,
      };
    case "SIGNUP_START":
      return {
        user: null,
        isFetching: true,
        error: false,
      };
    case "SIGNUP_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case "SIGNUP_FAILURE":
      return {
        user: null,
        isFetching: false,
        error: action.payload,
      };
    case "LOGOUT_START":
      return {
        user: action.payload,
        isFetching: true,
        error: false,
      };
    case "LOGOUT_SUCCESS":
      return {
        user: null,
        isFetching: false,
        error: false,
      };
    case "LOGOUT_FAILURE":
      return {
        user: null,
        isFetching: false,
        error: action.payload,
      };

    case "GOOGLE_LOGIN_START":
      return {
        user: null,
        isFetching: true,
        error: null,
      };
    case "GOOGLE_LOGIN_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: null,
      };
    case "GOOGLE_LOGIN_FAILURE":
      return {
        user: null,
        isFetching: false,
        error: action.payload,
      };
    case "DELETE_USER_START":
      return {
        user: null,
        isFetching: true,
        error: null,
      };
    case "DELETE_USER_SUCCESS":
      return {
        user: null,
        isFetching: false,
        error: null,
      };
    case "DELETE_USER_FAILURE":
      return {
        user: action.payload,
        isFetching: false,
        error: "Couldn't delete, please try later",
      };
    default:
      return state;
  }
};

export default AuthReducer;
