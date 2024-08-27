import useFetch from "./useFetch";

const usePost = (endpoint) => {
  const executePost = (data) => {
    fetch({ body: JSON.stringify(data) });
  };

  const { data, loading, error, fetch } = useFetch(
    endpoint,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    },
    false
  );

  return { data, loading, error, executePost };
};

export default usePost;
