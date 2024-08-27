/* import { useState, useEffect } from "react";
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

export default Home; */
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import DestinationCard from "../components/home/DestinationCard";
import Pagination from "../components/home/Pagination";
import useGet from "../hooks/useGet";

const Home = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const searchTerm = searchParams.get("search") || "";
    const page = parseInt(searchParams.get("page"), 10) || 1;
    const { data: destinations, loading, error } = useGet(`/destinations`);
    const [filteredDestinations, setFilteredDestinations] = useState([]);
    const [currentPage, setCurrentPage] = useState(page); // Initialize with the page from URL
    const cardsPerPage = 8;

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
            setCurrentPage(1); // Reset to page 1 when search term changes
            setSearchParams({ search: searchTerm, page: 1 });
        }
    }, [searchTerm, setSearchParams]);

    useEffect(() => {
        setSearchParams({ search: searchTerm, page: currentPage });
    }, [currentPage, searchTerm, setSearchParams]);

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
                    setCurrentPage={(pageNumber) => {
                        setCurrentPage(pageNumber);
                        setSearchParams({ search: searchTerm, page: pageNumber });
                    }}
                />
            </div>
        </div>
    );
};

export default Home;
