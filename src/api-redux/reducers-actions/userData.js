const SET_USER_DATA = "SET-USER-DATA";
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
    default:
      return state;
  }
};

// Action
export const setUserData = (userData) => ({
  type: SET_USER_DATA,
  payload: userData,
});
