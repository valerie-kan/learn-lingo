import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getDatabase,
  ref,
  get,
  query,
  orderByKey,
  startAfter,
  limitToFirst,
} from "firebase/database";

import app from "../../utils/firebaseConfig";

const db = getDatabase(app);

export const getTeachers = createAsyncThunk(
  "teachers/getTeachers",
  async ({ perPage, lastKey = null }, thunkAPI) => {
    try {
      let teachersQuery = lastKey
        ? query(
            ref(db),
            orderByKey(),
            startAfter(lastKey),
            limitToFirst(perPage)
          )
        : query(ref(db), orderByKey(), limitToFirst(perPage));

      const data = await get(teachersQuery);
      const dataVal = data.val();
      if (!dataVal) return [];

      const teachers = Object.entries(dataVal).map(([key, value]) => ({
        id: key,
        ...value,
      }));

      return teachers;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
