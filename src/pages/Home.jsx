import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import DeleteAlert from "../components/alerts/DeleteAlert";
import Pagination from "../components/home/Pagination";
import useGet from "../hooks/useGet";
import useDelete from "../hooks/useDelete";
import DestinationCard from "../components/home/DestinationCard";

const Home = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const searchTerm = searchParams.get("search") || "";
    const page = parseInt(searchParams.get("page"), 10) || 1;
    const { data: destinations, loading, error } = useGet(`/destinations`);
    const [filteredDestinations, setFilteredDestinations] = useState([]);
    const [currentPage, setCurrentPage] = useState(page);
    const [showDeleteAlert, setShowDeleteAlert] = useState(false);
    const [selectedDestinationId, setSelectedDestinationId] = useState(null);
    const cardsPerPage = 8;

    // Usa el hook useDelete
    const { executeDelete, loading: deleteLoading, error: deleteError } = useDelete('/destinations');

    useEffect(() => {
        if (destinations) {
            const filtered = destinations.filter(destination =>
                destination.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredDestinations(filtered);
        }
    }, [destinations, searchTerm]);

    useEffect(() => {
        if (searchTerm) {
            setCurrentPage(1);
            setSearchParams({ search: searchTerm, page: 1 });
        }
    }, [searchTerm, setSearchParams]);

    useEffect(() => {
        setSearchParams({ search: searchTerm, page: currentPage });
    }, [currentPage, searchTerm, setSearchParams]);

    const confirmDelete = async () => {
        if (selectedDestinationId) {
            await executeDelete(selectedDestinationId);
            setShowDeleteAlert(false);
            setFilteredDestinations(prevDestinations =>
                prevDestinations.filter(destination => destination.id !== selectedDestinationId)
            );
        }
    };

    const cancelDelete = () => {
        setShowDeleteAlert(false);
        setSelectedDestinationId(null);
    };

    if (loading) return <div className="text-blue font-bold flex justify-center">Loading...</div>;
    if (error) return <div className="flex justify-center">Error: {error.message}</div>;
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
                        onDelete={() => {
                            setSelectedDestinationId(destination.id);
                            setShowDeleteAlert(true);
                        }}
                    />
                ))}
            </div>
            <div className="flex justify-center mt-4">
                <Pagination
                    totalPages={Math.ceil(filteredDestinations.length / cardsPerPage)}
                    currentPage={currentPage}
                    setCurrentPage={(pageNumber) => {
                        setCurrentPage(pageNumber);
                        setSearchParams({ search: searchTerm, page: pageNumber });
                    }}
                />
            </div>

            {showDeleteAlert && (
                <DeleteAlert
                    onCancel={cancelDelete}
                    onConfirm={confirmDelete}
                    id={selectedDestinationId}
                    loading={deleteLoading}
                />
            )}
        </div>
    );
};

export default Home;
