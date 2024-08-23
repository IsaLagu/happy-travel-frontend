import Button from "../general/Button";
import PropTypes from "prop-types";
import useCrud from "../../hooks/useCrud";
import react from "@vitejs/plugin-react-swc";


const ButtonsForm = ({ operationType, data }) => {
    const { triggerOperation, loading, error } = useCrud(operationType, data);

    const accept = () => {
        triggerOperation()
    }

    const cancel = () => {
        alert("Operación cancelada")
    }

    react.useEffect(() => {
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

ButtonsForm.propTypes = {
    operationType: PropTypes.string,
    data: PropTypes.string,
};

export default ButtonsForm

