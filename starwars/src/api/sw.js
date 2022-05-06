import { request } from "./request";

const HOST = "https://swapi.dev/api/";

export const getItems = ({ category }) => {
  const url = `${HOST}${category}/`;
  return request(url);
};

export const getItem = ({ category, id }) => {
  const url = `${HOST}${category}/${id}`;
  return request(url);
};
