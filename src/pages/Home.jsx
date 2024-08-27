/* import Destinations from "../components/home/Destinations";
import Pagination from "../components/home/Pagination";

const Home = () => {
    return (
            <div >
                <Destinations />
            </div>
            
    )
};

export default Home */

import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import DestinationCard from "../components/home/DestinationCard";
import Pagination from "../components/home/Pagination";
import useGet from "../hooks/useGet";

const Home = () => {
    const [searchParams] = useSearchParams();
    const searchTerm = searchParams.get("search") || "";
    const { data: destinations, loading, error } = useGet("/destinations");
    const [filteredDestinations, setFilteredDestinations] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 8;

    useEffect(() => {
        if (destinations) {
            const filtered = destinations.filter(destination =>
                destination.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredDestinations(filtered);
        }
    }, [destinations, searchTerm]);

    if (loading) return <div className="text-blue font-bold flex justify-center">Loading...</div>;
    if (error) return <div className="flex justify-center">Error: {error}</div>;
    if (!filteredDestinations.length) return <div className="flex justify-center">No destinations found.</div>;

    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = filteredDestinations.slice(indexOfFirstCard, indexOfLastCard);

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
            <div className="flex justify-center mt-4">
                <Pagination
                    totalPages={Math.ceil(filteredDestinations.length / cardsPerPage)}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>
        </div>
    );
};

export default Home;
