export const DonationsFetchStart = (userCredentials) => ({
  type: "DONATIONS_FETCH_START",
});

export const DonationsFetchSuccess = (user) => ({
  type: "DONATIONS_FETCH_SUCCESS",
  payload: user,
});

export const DonationsFetchFailure = (error) => ({
  type: "DONATIONS_FETCH_FAILURE",
  payload: error,
});
