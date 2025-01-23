const REMEMBER_USER_EMAIL = "REMEMBER_USER_EMAIL";
const REMEMBER_USER_UNCHECKED = "REMEMBER_USER_UNCHECKED";
const REMEMBER_USER_CHECKED = "REMEMBER_USER_CHECKED";

const initialState = {
  rememberMe: true,
  email: "",
};

export const RememberUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMEMBER_USER_EMAIL:
      return { ...state, email: action.payload };
    case REMEMBER_USER_UNCHECKED:
      return { ...state, email: "", rememberMe: false };
    case REMEMBER_USER_CHECKED:
      return { ...state, rememberMe: true };
    default:
      return state;
  }
};

// Action
export const setUserEmail = (email) => ({
  type: REMEMBER_USER_EMAIL,
  payload: email,
});

export const setRememberUnchecked = () => ({
  type: REMEMBER_USER_UNCHECKED,
});

export const setRememberChecked = () => ({
  type: REMEMBER_USER_CHECKED,
});
