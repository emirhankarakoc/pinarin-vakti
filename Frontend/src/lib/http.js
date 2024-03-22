import axios from "axios";

const API = "https://emirhan-namaz-backend.kgzkbi.easypanel.host";

export const http = axios.create({
  baseURL: API,
});

export const fetcher = (url) => {
  return http.get(url).then((res) => {
    return res.data;
  });
};
