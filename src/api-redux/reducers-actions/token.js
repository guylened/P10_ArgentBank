const SET_TOKEN = "SET_TOKEN";

const initialState = {
  token: "",
  isAuthenticated: false,
};

export const TokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return { ...state, token: action.payload, isAuthenticated: true };
    default:
      return state;
  }
};

// Action
export const setToken = (token) => ({
  type: SET_TOKEN,
  payload: token,
});
