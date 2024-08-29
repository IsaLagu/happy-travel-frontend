import React from 'react';
import ButtonsForm from "../form/ButtonsForm";

const DeleteAlert = ({ onCancel, onConfirm, id, loading }) => {
    const handleConfirm = () => {
        if (id) {
            onConfirm(); 
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="w-[500px] h-[200px] bg-cream rounded-2xl p-10 flex flex-col items-center">
                <h5 className="text-[25px] text-center pt-[10px] font-jaldi text-blue mb-[10px] pb-2">
                    ¿Quieres eliminar este destino?
                </h5>
                <ButtonsForm 
                    onSubmit={handleConfirm} 
                    onCancel={onCancel} 
                    submitText={loading ? 'Eliminando...' : 'Confirmar'} 
                    cancelText='Cancelar' 
                    loading={loading}
                />
            </div>
        </div>
    );
};

export default DeleteAlert;


