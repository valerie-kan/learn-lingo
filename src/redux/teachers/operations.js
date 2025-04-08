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
    let teachersQuery;

    try {
      if (lastKey) {
        teachersQuery = query(
          ref(db),
          orderByKey(),
          startAfter(lastKey),
          limitToFirst(perPage)
        );
      } else {
        teachersQuery = query(ref(db), orderByKey(), limitToFirst(perPage));
      }
      const data = await get(teachersQuery);
      const dataVal = data.val();
      const teachers = Object.entries(dataVal || []).map(([key, value]) => ({
        id: key,
        ...value,
      }));
      return teachers;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
