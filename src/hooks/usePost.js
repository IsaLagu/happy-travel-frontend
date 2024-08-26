import { useState } from "react";
import useFetch from "./useFetch";

const usePost = (endpoint) => {
  const [postData, setPostData] = useState(null);

  const executePost = (data) => {
    setPostData(data);
    fetch();
  };

  const { data, loading, error, fetch } = useFetch(
    endpoint,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    },
    false
  );

  return { data, loading, error, executePost };
};

export default usePost;
