import useFetch from "./useFetch";

const useGet = (endpoint) => {
  const { data, loading, error } = useFetch(endpoint, { method: "GET" });
  return { data, loading, error };
};

export default useGet;
