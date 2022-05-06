import { LOAD_STATUSES } from "./constants.js";

export const getItem = (state) => state.itemReducer.data;
export const getItemLoadStatus = (state) => state.itemReducer.loadStatus;

export const isItemLoading = (state) =>
  getItemLoadStatus(state) === LOAD_STATUSES.LOADING;
export const isItemError = (state) =>
  getItemLoadStatus(state) === LOAD_STATUSES.ERROR;
export const isItemLoaded = (state) =>
  getItemLoadStatus(state) === LOAD_STATUSES.LOADED;
