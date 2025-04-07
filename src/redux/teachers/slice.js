import { createSlice } from "@reduxjs/toolkit";
import { getTeachers } from "./operations";

const initialState = {
  teacher: null,
  isLoading: false,
  error: null,
  page: 1,
  perPage: 4,
};

const teachersSlice = createSlice({
  name: "teachers",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getTeachers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getTeachers.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.isLoading = false;
        state.teacher = payload;
      })
      .addCase(getTeachers.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export default teachersSlice.reducer;
