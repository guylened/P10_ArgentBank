const SET_USER_TOKEN = "SET_USER_TOKEN";
const CLEAR_USER_TOKEN = "CLEAR_USER_TOKEN";

const initialState = {
  token: "",
  isAuthenticated: false,
};

export const TokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_TOKEN:
      return { ...state, token: action.payload, isAuthenticated: true };
    case CLEAR_USER_TOKEN:
      return initialState;
    default:
      return state;
  }
};

// Action
export const setToken = (token) => ({
  type: SET_USER_TOKEN,
  payload: token,
});

export const clearUserToken = () => ({
  type: CLEAR_USER_TOKEN,
});
