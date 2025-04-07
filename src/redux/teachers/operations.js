import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDatabase, ref, get } from "firebase/database";

import app from "../../utils/firebaseConfig";

const db = getDatabase(app);

export const getTeachers = createAsyncThunk(
  "teachers/getTeachers",
  async (_, thunkAPI) => {
    try {
      const teachersRef = ref(db);
      const data = await get(teachersRef);
      const teachers = data.val();
      return teachers;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
