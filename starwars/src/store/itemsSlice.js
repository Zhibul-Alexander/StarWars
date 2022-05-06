// import { createSlice } from "@reduxjs/toolkit";
// import { LOAD_STATUSES, itemsInitialState } from "./constants";

// export const { reducer } = createSlice({
//   name: "items",
//   initialState: { data: [], loadStatus: LOAD_STATUSES.UNKNOWN },
//   reducer: {
//     fetchStart: (state) => {
//       state.loadStatus = LOAD_STATUSES.LOADING;
//     },
//     fetchSuccess: (state, action) => {
//       state.data = action.payload;
//       state.loadStatus = LOAD_STATUSES.LOADED;
//     },
//     fetchError: (state) => {
//       state.data = [];
//       state.loadStatus = LOAD_STATUSES.ERROR;
//     },
//     clearState: () => {
//       return {
//         ...itemsInitialState,
//       };
//     },
//   },
// });
