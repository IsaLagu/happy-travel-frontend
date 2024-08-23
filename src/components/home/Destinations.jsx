import DestinationCard from "./DestinationCard"
import useGet from "../../hooks/useGet"

const Destinations = () => {
    const { data: destinations, loading, error } =  useGet("/destinations")

    if (loading) {
        return <div className="text-blue font-bold "> Loading </div>
        
    }

    if (error) {
        return <div> Error: {error.message} </div>
    }

    if (!destinations || destinations.length === 0) {
        return <div>No destinations available.</div>;
    }

    return(
        <div className="flex flex-wrap items-center justify-between gap-6 m-9 ml-14 mr-14">
            {destinations.map((destination) => (
                <DestinationCard
                key={destination.id}
                title={destination.title}
                location={destination.location}
                imageUrl={destination.imageUrl}
                />
            ))}

        </div>
    )
}

export default Destinations