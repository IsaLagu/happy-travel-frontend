import React from 'react';
import ButtonsForm from "../form/ButtonsForm";

const DeleteAlert = ({ isOpen, onCancel, onConfirm }) => {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="w-[500px] h-[200px] bg-cream rounded-2xl p-10 flex flex-col items-center">
                <h5 className="text-[25px] text-center pt-[10px] font-jaldi text-blue mb-[10px] pb-2"> Destino eliminado con éxito </h5>
                <ButtonsForm onSubmit={onConfirm} onCancel={onCancel} />
            </div>
        </div>
    );
};

export default DeleteAlert;
