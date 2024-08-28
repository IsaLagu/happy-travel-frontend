import { useUser } from "../context/UserContext";
import useFetch from "./useFetch";

const useDelete = (endpoint) => {
    const { token } = useUser();

    const executeDelete = (data) => {
        if (!token) {
            console.error("No se puede ejecutar el DELETE: No hay token disponible.");
            navigate("/login");
            return;
        }

        fetch({ body: JSON.stringify(data) });
    };

    const { data, loading, error, fetch } = useFetch(
        endpoint,
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                ...(token && { Authorization: `Bearer ${token}` }),
            },
        },
        false
    );

    return { data, loading, error, executeDelete };
};

export default useDelete;
