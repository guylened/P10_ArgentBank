import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  email: "",
  firstName: "",
  lastName: "",
  userName: "",
  createdAt: "",
  updatedAt: "",
  token: "",
  isAuthenticated: false,
};

export const userDataSlice = createSlice({
  name: "UserData",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      return { ...state, ...action.payload };
    },
    setToken: (state, action) => {
      return { ...state, token: action.payload, isAuthenticated: true };
    },
    updateUserData: (state, action) => {
      return { ...state, userName: action.payload };
    },
    clearUserData: () => {
      return initialState;
    },
  },
});
