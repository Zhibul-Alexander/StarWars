// import { configureStore } from "@reduxjs/toolkit";
// import { reducer as itemReducer } from "./itemSlice";
// import { reducer as itemsReducer } from "./itemsSlice";
import { rootReducer } from "./reducer";
import { createStore } from "redux";

// export const store = configureStore({
//   reducers: rootReducer,
// });

export const store = createStore(rootReducer);
