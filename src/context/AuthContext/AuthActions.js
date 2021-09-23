export const LoginStart = (userCredentials) => ({
  type: "LOGIN_START",
});

export const LoginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});

export const LoginFailure = (error) => ({
  type: "LOGIN_FAILURE",
  payload: error,
});

export const SignupStart = (userCredentials) => ({
  type: "SIGNUP_START",
});

export const SignupSuccess = (user) => ({
  type: "SIGNUP_SUCCESS",
  payload: user,
});

export const SignupFailure = (error) => ({
  type: "SIGNUP_FAILURE",
  payload: error,
});

export const LogoutStart = (userCredentials) => ({
  type: "LOGOUT_START",
});

export const LogoutSuccess = () => ({
  type: "LOGOUT_SUCCESS",
});

export const LogoutStart = (error) => ({
  type: "LOGOUT_FAILURE",
  payload: error,
});

export const GoogleLoginStart = (userCredentials) => ({
  type: "GOOGLE_LOGIN_START",
});

export const GoogleLoginSuccess = (user) => ({
  type: "GOOGLE_LOGIN_SUCCESS",
  payload: user,
});

export const GoogleLoginFailure = (error) => ({
  type: "GOOGLE_LOGIN_FAILURE",
  payload: error,
});

export const DeleteUserStart = (userCreds) => ({
  type: "DELETE_USER_START",
});

export const DeleteUserSuccess = () => ({
  type: "DELETE_USER_SUCCESS",
});

export const DeleteUserFailure = (user) => ({
  type: "DELETE_USER_FAILURE",
  payload: user,
});
