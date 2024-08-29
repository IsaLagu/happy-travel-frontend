import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DestinationCard from "./DestinationCard";
import useGet from "../../hooks/useGet";
import Pagination from "./Pagination";
import DeleteAlert from "../alerts/DeleteAlert";
import useDelete from "../../hooks/useDelete";

const Destinations = () => {
  const { data: destinations, loading, error, setData } = useGet("/destinations/searchById");
  const [currentPage, setCurrentPage] = useState(1);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [selectedDestinationId, setSelectedDestinationId] = useState(null);
  const [executeDelete, deleteLoading, deleteError] = useDelete("/destinations/searchById");
  const cardsPerPage = 8;
  const navigate = useNavigate();

  if (loading) {
    return <div className="text-blue font-bold flex justify-center p-48"> Cargando </div>;
  }

  if (error) {
    return <div className="flex justify-center"> Error: {error.message} </div>;
  }

  if (!destinations || destinations.length === 0) {
    return <div className="flex justify-center">No hay destinos disponibles.</div>;
  }

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = destinations.slice(indexOfFirstCard, indexOfLastCard);

  const handleInfoClick = (id) => {
    navigate(`/description`);
  };

  const handleEditClick = (id) => {
    navigate(`/edit-destination`);
  };

  const handleDeleteClick = (id) => {
    setSelectedDestinationId(id);
    setShowDeleteAlert(true);
  };

  const confirmDelete = () => {
    if (selectedDestinationId) {
      executeDelete(`/${selectedDestinationId}`).then(() => {
        setData((prevDestinations) =>
          prevDestinations.filter((destination) => destination.id !== selectedDestinationId)
        );
        setShowDeleteAlert(false);
      }).catch((err) => {
        console.error(err);
        setShowDeleteAlert(false);
      });
    }
  };

  const cancelDelete = () => {
    setShowDeleteAlert(false);
    setSelectedDestinationId(null);
  };

  return (
    <div className="relative">
      <div className="flex flex-wrap items-center justify-between gap-6 m-9 ml-14 mr-14">
        {currentCards.map((destination) => (
          <DestinationCard
            key={destination.id}
            id={destination.id}
            title={destination.title}
            location={destination.location}
            imageUrl={destination.imageUrl}
            onInfo={handleInfoClick}
            onEdit={handleEditClick}
            onDelete={handleDeleteClick}
          />
        ))}
      </div>
      <div className="flex justify-center mt-2">
        <Pagination
          className="absolute bottom-0 flex items-end justify-center p-4"
          totalPages={Math.ceil(destinations.length / cardsPerPage)}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>

      {showDeleteAlert && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <DeleteAlert onCancel={cancelDelete} onConfirm={confirmDelete} loading={deleteLoading} error={deleteError}/>
        </div>
      )}
    </div>
  );
};

export default Destinations;
