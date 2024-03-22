import useSWR from "swr";
import { fetcher } from "../lib/http";

export const useHTTP = (url) => {
  return useSWR(url, fetcher);
};
