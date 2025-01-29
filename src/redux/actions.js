// import { createAction } from "@reduxjs/toolkit";

// export const addTask = createAction("tasks/addTask");

// export const deleteTask = createAction("tasks/deleteTask");

// export const toggleCompleted = createAction("tasks/toggleCompleted");

// export const setStatusFilter = createAction("tasks/setStatusFilter");

// export const addTask = (newTask) => {
//   return {
//     type: "tasks/addTask",
//     payload: newTask,
//   };
// };

// export const deleteTask = (taskId) => {
//   return {
//     type: "tasks/deleteTask",
//     payload: taskId,
//   };
// };

// export const toggleCompleted = (taskId) => {
//   return {
//     type: "tasks/toggleCompleted",
//     payload: taskId,
//   };
// };

// export const setStatusFilter = (value) => {
//   return {
//     type: "tasks/setStatusFilter",
//     payload: value,
//   };
// };

// // tasksSlice.js

// import { createAction } from "@reduxjs/toolkit";

// export const addTask = createAction("tasks/addTask");

// export const deleteTask = createAction("tasks/deleteTask");

// export const toggleCompleted = createAction("tasks/toggleCompleted");

// const initialState = {
//   items: [
//     { id: 0, text: "Learn HTML and CSS", completed: true },
//     { id: 1, text: "Get good at JavaScript", completed: true },
//     { id: 2, text: "Master React", completed: false },
//     { id: 3, text: "Discover Redux", completed: false },
//     { id: 4, text: "Build amazing apps", completed: false },
//   ],
// };

// export const taskReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "tasks/addTask":
//       return {
//         ...state,
//         items: [...state.items, action.payload],
//       };

//     case "tasks/deleteTask":
//       return {
//         ...state,
//         items: state.items.filter((task) => task.id !== action.payload),
//       };

//     case "tasks/toggleCompleted":
//       return {
//         ...state,
//         items: state.items.map((task) => {
//           if (task.id !== action.payload) {
//             return task;
//           }

//           return {
//             ...task,
//             completed: !task.completed,
//           };
//         }),
//       };

//     default:
//       return state;
//   }
// };

// // filterSlice.js

// import { createAction } from "@reduxjs/toolkit";

// export const setStatusFilter = createAction("tasks/setStatusFilter");

// const initialState = {
//   status: "all",
// };

// export const filterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "tasks/setStatusFilter":
//       return {
//         ...state,
//         status: action.payload,
//       };
//     default:
//       return state;
//   }
// };
