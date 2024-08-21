import { Outlet } from "react-router-dom"
import NavBar from "../components/general/Navbar"

const Layout = () => {
    return (
        <div className="overflow-hidden">
            <NavBar/>
            <main>
                <Outlet/>
            </main>

        </div>
    );
};

export default Layout