import { useState, useEffect } from "react";
import { API_URL } from "../config";

const useFetch = (endpoint, options, shouldFetch = true) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async (fetchOptions = undefined) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}${endpoint}`, { ...options, ...fetchOptions });
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!shouldFetch) return;
    fetchData();
  }, [endpoint]);

  return { data, loading, error, fetch: fetchData };
};

export default useFetch;
