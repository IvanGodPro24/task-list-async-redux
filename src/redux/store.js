import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./tasksSlice";
import filterReducer from "./filtersSlice";

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    filters: filterReducer,
  },
});