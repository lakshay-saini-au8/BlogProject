import axios from "axios";
import { BASE_URL } from "./config";

export const fetchPost = () => {
  const data = axios.get(`${BASE_URL}/posts`);
  data.then((response) => response.data).then((final) => console.log(final));
};

export const fetchUser = () => {
  const data = axios.get(`${BASE_URL}/users`);
  data.then((response) => response.data).then((final) => console.log(final));
};
