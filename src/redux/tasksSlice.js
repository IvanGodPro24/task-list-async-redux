import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "tasks",

  initialState: {
    items: [],
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
  },
});

export const { addTask, deleteTask, toggleCompleted } = slice.actions;

export default slice.reducer;
