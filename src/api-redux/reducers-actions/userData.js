const SET_USER_DATA = "SET-USER-DATA";
const CLEAR_USER_DATA = "CLEAR_USER_DATA";
const UPDATE_USER_DATA = "UPDATE_USER_DATA";

const initialState = {
  email: "",
  firstName: "",
  lastName: "",
  userName: "",
  createdAt: "",
  updatedAt: "",
  id: "",
};

export const UserDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, ...action.payload };
    case UPDATE_USER_DATA:
      return { ...state, userName: action.payload };
    case CLEAR_USER_DATA:
      return initialState;
    default:
      return state;
  }
};

// Action
export const setUserData = (userData) => ({
  type: SET_USER_DATA,
  payload: userData,
});

export const clearUserData = () => ({
  type: CLEAR_USER_DATA,
});

export const updateUserData = (userName) => ({
  type: UPDATE_USER_DATA,
  payload: userName,
});
