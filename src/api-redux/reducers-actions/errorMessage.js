const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE";
const CLEAR_ERROR_MESSAGE = "CLEAR_ERROR_MESSAGE";

const initialState = { errorMessage: "" };

export const ErrorMessageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR_MESSAGE:
      return { ...state, errorMessage: action.payload };
    case CLEAR_ERROR_MESSAGE:
      return initialState;
    default:
      return state;
  }
};

// Action
export const setErrorMessage = (message) => ({
  type: SET_ERROR_MESSAGE,
  payload: message,
});

export const clearErrorMessage = () => ({
  type: CLEAR_ERROR_MESSAGE,
});
