import axios from "axios";
// import { fetchInProgress, fetchSuccess, fetchError } from "./tasksSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";

export const fetchTasks = createAsyncThunk(
  "tasks/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/tasks");

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const fetchTasks = () => async (dispatch) => {
//   try {
//     dispatch(fetchInProgress);

//     const response = await axios.get("/tasks");

//     dispatch(fetchSuccess(response.data));
//   } catch (error) {
//     dispatch(fetchError(error.message));
//     console.error(error);
//   }
// };
