import { LOAD_STATUSES } from "./constants.js";

export const getItems = (state) => state.itemsReducer.data;
export const getItemsLoadStatus = (state) => state.itemsReducer.loadStatus;

export const isItemsLoading = (state) =>
  getItemsLoadStatus(state) === LOAD_STATUSES.LOADING;
export const isItemsError = (state) =>
  getLoadStatus(state) === LOAD_STATUSES.ERROR;
export const isItemsLoaded = (state) =>
  getItemsLoadStatus(state) === LOAD_STATUSES.LOADED;
