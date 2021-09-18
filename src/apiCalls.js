import axios from "axios";

export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post("/users/login", userCredential);
    if (res.data.message) {
      dispatch({ type: "LOGIN_FAILURE", payload: res.data });
      return;
    }
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (err) {
    console.log(err);
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};

export const signupCall = async (userCredential, dispatch) => {
  dispatch({ type: "SIGNUP_START" });
  const emailRe = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const passwordRe = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  const { name, password, passwordConf, email } = userCredential;
  if (!emailRe.test(String(email).toLowerCase())) {
    dispatch({
      type: "SIGNUP_FAILURE",
      payload: {
        message: "Please Enter Valid Email",
      },
    });
    return;
  }
  if (password !== passwordConf) {
    dispatch({
      type: "SIGNUP_FAILURE",
      payload: {
        message: "Password and Confirm Password Doesn't Match",
      },
    });
    return;
  }
  if (!passwordRe.test(password)) {
    dispatch({
      type: "SIGNUP_FAILURE",
      payload: {
        message:
          "Password must contain a symbol, upper and lower case letters and a number",
      },
    });
    return;
  }
  try {
    axios
      .post("/users/register", {
        name,
        password,
        passwordConf,
        email,
      })
      .then((res) => {
        if (res.data.message) {
          dispatch({ type: "SIGNUP_FAILURE", payload: res.data });
          return;
        }
        dispatch({ type: "SIGNUP_SUCCESS", payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: "SIGNUP_FAILURE", payload: err });
      });
  } catch (err) {
    dispatch({ type: "SIGNUP_FAILURE", payload: err });
  }
};

export const logoutCall = (userCredential, dispatch) => {
  dispatch({ type: "LOGOUT_START" });
  axios
    .post("/users/logout")
    .then((res) => {
      if (res.data.successfull) {
        dispatch({ type: "LOGOUT_SUCCESS" });
      } else {
        dispatch({ type: "LOGOUT_FAILURE", payload: res.data.message });
      }
    })
    .catch((err) => {
      dispatch({ type: "LOGOUT_FAILURE", payload: err });
    });
};

export const googleLoginCall = (userCredential, dispatch) => {
  dispatch({ type: "GOOGLE_LOGIN_START" });
  const { tokenId } = userCredential;
  try {
    // Login
    axios
      .post("/users/google", { tokenId })
      .then((res) => {
        if (res.data.message) {
          dispatch({ type: "GOOGLE_LOGIN_FAILURE", payload: res.data });
        }
        dispatch({ type: "GOOGLE_LOGIN_SUCCESS", payload: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    dispatch({ type: "GOOGLE_LOGIN_FAILURE", payload: err });
  }
};

export const sessionLoginCall = (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_SUCCESS", payload: userCredential });
};
