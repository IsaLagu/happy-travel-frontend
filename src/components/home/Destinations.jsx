import DestinationCard from "./DestinationCard"
import useGet from "../../hooks/useGet"
import { useState } from "react"
import Pagination from "./Pagination"

const Destinations = () => {
    const { data: destinations, loading, error } = useGet("/destinations")
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 8

    if (loading) {
        return <div className="text-blue font-bold flex justify-center "> Loading </div>

    }

    if (error) {
        return <div className="flex justify-center"> Error: {error.message} </div>
    }

    if (!destinations || destinations.length === 0) {
        return <div className="flex justify-center">No destinations available.</div>;
    }

    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = destinations.slice(indexOfFirstCard, indexOfLastCard);


    return (
        <div>
            <div className="flex flex-wrap items-center justify-between gap-6 m-9 ml-14 mr-14">
                {currentCards.map((destination) => (
                    <DestinationCard
                        key={destination.id}
                        title={destination.title}
                        location={destination.location}
                        imageUrl={destination.imageUrl}
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
        </div>

    )
}

export default Destinations