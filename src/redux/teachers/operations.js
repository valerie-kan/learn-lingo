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
      // console.log(data);
      const teachers = data.val();
      // console.log("Teachers: ", teachers);
      return teachers;
    } catch (error) {
      // console.error("Error getting teachers: ", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
