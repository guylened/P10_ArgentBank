import { createAction } from "@reduxjs/toolkit";

export const setUserEmail = createAction("remember_user_email");
export const setRememberUnchecked = createAction("remember_user_unchecked");
export const setRememberChecked = createAction("remember_user_checked");

const initialState = {
  rememberMe: true,
  email: "",
};

export const RememberUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case setUserEmail.type:
      return { ...state, email: action.payload };
    case setRememberUnchecked.type:
      return { ...state, email: "", rememberMe: false };
    case setRememberChecked.type:
      return { ...state, rememberMe: true };
    default:
      return state;
  }
};
