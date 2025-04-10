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

      // const filtered = teachers.filter((teacher) => {
      //   const matchesLang = filters.language
      //     ? Array.isArray(teacher.languages) &&
      //       teacher.languages.includes(filters.language)
      //     : true;

      //   const matchesLevel = filters.level
      //     ? Array.isArray(teacher.levels) &&
      //       teacher.levels.includes(filters.level)
      //     : true;

      //   const matchesPrice = filters.price
      //     ? parseInt(teacher.price_per_hour) === parseInt(filters.price)
      //     : true;

      //   // const isMatch = ;

      //   console.log("Teacher:", teacher.name);
      //   console.log("  matchesLang:", matchesLang);
      //   console.log("  matchesLevel:", matchesLevel);
      //   console.log("  matchesPrice:", matchesPrice);

      //   return matchesLang && matchesLevel && matchesPrice;
      // });
      // // console.log(filtered);
      // return filtered;
      // return filtered.slice(0, perPage);
      return teachers;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
