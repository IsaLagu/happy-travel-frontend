import Button from "../general/Button";
import React from "react";
import { useNavigate } from "react-router-dom";


const ButtonsForm = ({ onSubmit, onCancel }) => {
    const navigate = useNavigate()

    const accept = () => {
        onSubmit()
    }

    const cancel = () => {
        onCancel();
        navigate("/")
    }

    return (
        <div className="flex flex-wrap gap-4">
            <Button type="button" onClick={accept} buttonStyle="bg-green" buttonText="Aceptar" />
            <Button type="button" onClick={cancel} buttonStyle="bg-red" buttonText="Cancelar" />


        </div>
    )
};


export default ButtonsForm

