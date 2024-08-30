import useFetch from "./useFetch";

const OPTIONS = { method: "GET" };

const useGet = (endpoint) => {
  const { data, loading, error } = useFetch(endpoint, OPTIONS);
  return { data, loading, error };
};

export default useGet;
