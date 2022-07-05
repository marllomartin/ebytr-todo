import useSWR from "swr";
import taskAPI from "../services/taskAPI";

export function useAxios(url) {
  const { data, error, mutate } = useSWR(url, async (url) => {
    const { data } = await taskAPI.get(url);

    return data;
  });

  return { data, error, mutate };
}
