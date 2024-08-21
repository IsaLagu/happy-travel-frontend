import DestinationCard from "../components/home/DestinationCard";
import Pagination from "../components/home/Pagination";

const Home = () => {
    return (
        <div>
            <div className="flex flex-wrap items-center justify-between gap-6 m-9 ml-14 mr-14">
                <DestinationCard />
                <DestinationCard />
                <DestinationCard />
                <DestinationCard />
                <DestinationCard />
                <DestinationCard />
                <DestinationCard />
                <DestinationCard />
            </div>
            <div>
                <Pagination className="flex items-end justify-center p-6" />
            </div>

        </div>
    )
};

export default Home