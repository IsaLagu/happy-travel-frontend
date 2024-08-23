import Button from "../general/Button";
import useCrud from "../../hooks/useCrud";
import React from "react";


const ButtonsForm = ({ operationType, data }) => {
    const { triggerOperation, loading, error } = useCrud(operationType, data);

    const accept = () => {
        triggerOperation()
    }

    const cancel = () => {
        alert("Operación cancelada")
    }

    React.useEffect(() => {
        if (!loading && error) {
            alert(error)
        } else if (!loading) {
            alert("Operación exitosa")
        }
    }, [loading, error])

    return (
        <div className="flex flex-wrap gap-4">
            <Button onClick={accept} buttonStyle="bg-green" buttonText="Aceptar" />
            <Button onClick={cancel} buttonStyle="bg-red" buttonText="Cancelar" />


        </div>
    )
};


export default ButtonsForm

