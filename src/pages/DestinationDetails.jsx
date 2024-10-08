import React from "react";
import { useParams } from "react-router-dom";
import useGet from "../hooks/useGet";

const DestinationDetails = () => {
  const { id } = useParams();
  const { data: destination, loading, error } = useGet(`/destinations/searchById?id=${id}`);

  if (loading) {
    return <div className="text-blue font-bold flex justify-center">Loading</div>;
  }

  if (error) {
    return <div className="flex justify-center">Error: {error.message}</div>;
  }

  if (!destination) {
    return <div className="flex justify-center">Destino no encontrado.</div>;
  }
  return (
    <div class="p-12 font-jaldi grid grid-cols-2 gap-4 mx-auto items-center">
      <div>
        <img className="rounded-lg" src={destination.imageUrl} alt={destination.title} />
      </div>
      <div className="p-5">
        <div className="flex justify-between">
          <h5 className="text-5xl font-bold tracking-tight text-red">{destination.title}</h5>
          <div className="flex gap-2">
            <img className="h-8" src="../assets/images/Edit-icon.svg" />
            <img className="h-8" src="../assets/images/Delete-icon.svg" />
          </div>
        </div>
        <p className="mb-3 text-2xl font-normal text-red ">{destination.location}</p>
        <p className="text-blue text-2xl"> {destination.description}</p>
      </div>
    </div>
  );
};

export default DestinationDetails;
