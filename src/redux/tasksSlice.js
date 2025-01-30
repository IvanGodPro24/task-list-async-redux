import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks } from "./operations";

const slice = createSlice({
  name: "tasks",

  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  reducers: {
    addTask(state, action) {
      state.items.push(action.payload);

      //   return {
      //     ...state,
      //     items: [...state.items, action.payload],
      //   };
    },

    deleteTask(state, action) {
      state.items = state.items.filter((task) => task.id !== action.payload);

      //   return {
      //     ...state,
      //     items: state.items.filter((task) => task.id !== action.payload),
      //   };
    },

    toggleCompleted(state, action) {
      for (const task of state.items) {
        if (task.id === action.payload) {
          task.completed = !task.completed;
          break;
        }
      }

      //   return {
      //     ...state,
      //     items: state.items.map((task) => {
      //       if (task.id !== action.payload) {
      //         return task;
      //       }
      //       return {
      //         ...task,
      //         completed: !task.completed,
      //       };
      //     }),
      //   };
    },

    // fetchInProgress(state) {
    //   state.isLoading = true;
    // },

    // fetchSuccess(state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.items = action.payload;
    // },

    // fetchError(state, action) {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  addTask,
  deleteTask,
  toggleCompleted,
  fetchInProgress,
  fetchSuccess,
  fetchError,
} = slice.actions;

export default slice.reducer;
