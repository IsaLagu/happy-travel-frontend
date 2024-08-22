import Destinations from "../components/home/Destionations";
import Pagination from "../components/home/Pagination";

const Home = () => {
    return (
        <div>
            <div >
                <Destinations />
            </div>
            <div>
                <Pagination className=" absolute bottom-0 flex items-end justify-center p-6" />
            </div>

        </div>
    )
};

export default Home