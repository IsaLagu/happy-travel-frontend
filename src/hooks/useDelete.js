import { useUser } from "../context/UserContext";
import useFetch from "./useFetch";

const useDelete = (endpoint) => {
    const { token } = useUser();

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

    const executeDelete = async (id) => {
        if (!token) {
            console.error("No se puede ejecutar el DELETE: No hay token disponible.");
            return;
        }

        try {
            await fetch(id);
        } catch (err) {
            console.error("Error al ejecutar DELETE:", err);
        }
    };

    return { data, loading, error, executeDelete };
};

export default useDelete;
