import { useState, useEffect } from "react";
import useFetch from "./useFetch";

const useCrud = (operationType, data) => {
    const [shouldFetch, setShouldFetch] = useState(false);
    const [endpoint, setEndpoint] = useState("");
    const [options, setOptions] = useState({});
    const { data: responseData, loading, error } = useFetch(endpoint, options);

    useEffect(() => {
        if (shouldFetch) {

            setShouldFetch(false);
        }
    }, [shouldFetch, endpoint, options]);

    const triggerOperation = () => {
        let endpointConfig = "";
        let method = "";

        switch (operationType) {
            case "create":
                endpointConfig = "/create";
                method = "POST";
                break;
            case "edit":
                endpointConfig = `/edit/${data.id}`;
                method = "PUT";
                break;
            case "delete":
                endpointConfig = `/delete/${data.id}`;
                method = "DELETE";
                break;
            default:
                console.error("Operación no soportada");
                return;
        }

        const optionsConfig = {
            method,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        };

        setEndpoint(endpointConfig);
        setOptions(optionsConfig);
        setShouldFetch(true);
    };

    return { triggerOperation, responseData, loading, error };
};

export default useCrud;
