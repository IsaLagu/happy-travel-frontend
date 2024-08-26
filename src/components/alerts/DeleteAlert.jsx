import ButtonsForm from "../form/ButtonsForm";

const DeleteAlert = () => {
    return (
        <div className="flex justify-center items-center mt-12 p-24">
            <div className="w-[500px] h-[200px] bg-cream rounded-2xl p-10 flex flex-col items-center">
                    <h5 className="text-[25px] text-center pt-[10px] font-jaldi text-blue mb-[10px] pb-2">
                        ¿Quieres eliminar este destino?
                    </h5>
                    <ButtonsForm/>
            </div>
        </div>
    );
};

export default DeleteAlert