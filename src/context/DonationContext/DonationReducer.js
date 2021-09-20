const DonationReducer = (state, action) => {
  switch (action.type) {
    case "DONATIONS_FETCH_START":
      return {
        donations: null,
        isFetching: true,
        error: false,
      };
    case "DONATIONS_FETCH_SUCCESS":
      return {
        donations: action.payload,
        isFetching: false,
        error: false,
      };
    case "DONATIONS_FETCH_FAILURE":
      return {
        donations: null,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default DonationReducer;
