// import { createSlice } from "@reduxjs/toolkit";
// import { LOAD_STATUSES, itemInitialState } from "./constants";

// export const { reducer } = createSlice({
//   name: "item",
//   reducer: {
//     fetchStart: (state) => {
//       state.loadStatus = LOAD_STATUSES.LOADING;
//     },
//     fetchSuccess: (state, action) => {
//       state.data = action.payload;
//       state.loadStatus = LOAD_STATUSES.LOADED;
//     },
//     fetchError: (state) => {
//       state.data = {};
//       state.loadStatus = LOAD_STATUSES.ERROR;
//     },
//     clearState: () => {
//       return {
//         ...itemInitialState,
//       };
//     },
//   },
// });
