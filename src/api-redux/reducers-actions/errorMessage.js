import { createAction } from "@reduxjs/toolkit";

export const setErrorMessage = createAction("set_error_message");
export const clearErrorMessage = createAction("clear_error_message");

const initialState = { errorMessage: "" };

export const errorMessageReducer = (state = initialState, action) => {
  switch (action.type) {
    case setErrorMessage.type:
      return { ...state, errorMessage: action.payload };
    case clearErrorMessage.type:
      return initialState;
    default:
      return state;
  }
};
