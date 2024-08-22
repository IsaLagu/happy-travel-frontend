import Button from "../general/Button";

const ButtonsForm = () => {
    return (
        <div className="flex flex-wrap gap-4">
            <Button buttonStyle="bg-green" buttonText="Aceptar"/>
            <Button buttonStyle="bg-red" buttonText="Cancelar"/>
            

        </div>
    )
};

export default ButtonsForm