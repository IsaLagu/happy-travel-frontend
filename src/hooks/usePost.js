import { useUser } from "../context/UserContext";
import useFetch from "./useFetch";

const usePost = (endpoint) => {
  const { token } = useUser();

  const executePost = (data) => {
    if (!token) {
      console.error("No se puede ejecutar el POST: No hay token disponible.");
      navigate("/login");
      return;
    }

    fetch({ body: JSON.stringify(data) });
  };

  const { data, loading, error, fetch } = useFetch(
    endpoint,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    },
    false
  );

  return { data, loading, error, executePost };
};

export default usePost;
