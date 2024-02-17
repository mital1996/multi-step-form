import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  phone: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userForm: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { userForm } = userSlice.actions;
export default userSlice.reducer;
