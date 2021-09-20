import React, { useReducer } from "react";
import DonationReducer from "./DonationReducer";

const INITIAL_STATE = {
  donations: null,
  isFetching: false,
  error: false,
  dispatchDonationState: () => {},
};

export const DonationContext = React.createContext(INITIAL_STATE);

export const DonationContextProvider = ({ children }) => {
  const [donationState, dispatchDonationState] = useReducer(
    DonationReducer,
    INITIAL_STATE
  );
  return (
    <DonationContext.Provider
      value={{
        donations: donationState.donations,
        isFetching: donationState.isFetching,
        error: donationState.error,
        dispatchDonationState,
      }}
    >
      {children}
    </DonationContext.Provider>
  );
};
