import { useState } from "react"
import DeleteAlert from "../alerts/DeleteAlert";
import { useUser } from "../../context/UserContext";

const DestinationCard = ({ title, location, imageUrl, onEdit, onDelete, onInfo }) => {
    const user = useUser()

    const [showDeleteAlert, setShowDeleteAlert] = useState(false);

    const deleteClick = () => {
        setShowDeleteAlert(true)
    };

    const cancelDelete = () => {
        setShowDeleteAlert(false)
    };

    const confirmDelete = () => {
        setShowDeleteAlert(false)
        onDelete()
    };

    return (
        <div className="flex flex-col bg-cream rounded-[20px] w-[300px] h-[375px] relative">
            <div className="relative overflow-hidden bg-cover">
                <img className="w-[300px] h-[300px] rounded-t-[20px] object-cover" src={imageUrl} alt="Card Image"></img>
                {user && (
                    <button onClick={onInfo} className="absolute top-2 right-2 p-1 z-20">
                        <img src="..\assets\images\Info-icon.svg" alt="Info" className="h-10" />
                    </button>
                )}
            </div>
            <div className="p-4 flex flex-col relative h-40 leading-8">
                <div className="flex flex-row gap-3 justify-between">
                    <h3 className="font-jaldi text-blue font-bold text-[25px] leading-6">{title}</h3>
                    {user && (
                        <div className="flex space-x-1 mt-2 -h-8">
                            <button onClick={onEdit} className="h-8 w-8">
                                <img src="..\assets\images\Edit-icon.svg" alt="Edit" className="h-8 w-8"/>
                            </button>
                            <button onClick={deleteClick} className="h-8 w-8">
                                <img src="..\assets\images\Delete-icon.svg" alt="Delete" className="h-8 w-8"/>
                            </button>
                        </div>
                    )}
                </div>
                <p className="font-jaldi text-blue text-[20px] mt-[-5px]">{location}</p>
            </div>

            {showDeleteAlert && (
                <DeleteAlert onCancel={cancelDelete} onConfirm={confirmDelete} />
            )}
        </div>
    )
}

export default DestinationCard