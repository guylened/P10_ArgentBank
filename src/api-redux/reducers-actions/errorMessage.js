const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE";
const initialState = { errorMessage: "" };

export const ErrorMessageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR_MESSAGE:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

// Action
export const setErrorMessage = (message) => ({
  type: SET_ERROR_MESSAGE,
  payload: message,
});
