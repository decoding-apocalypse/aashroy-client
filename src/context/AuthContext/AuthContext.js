import React, { useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: null,
  isFetching: false,
  error: false,
  dispatchAuthState: () => {},
};

export const AuthContext = React.createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [authState, dispatchAuthState] = useReducer(AuthReducer, INITIAL_STATE);
  return (
    <AuthContext.Provider
      value={{
        user: authState.user,
        isFetching: authState.isFetching,
        error: authState.error,
        dispatchAuthState,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
