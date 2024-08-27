import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useUser from "../../hooks/useUser";
import Input from "../general/Input";

const NavBar = () => {
    const { user } = useUser();
    const location = useLocation();
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            navigate(`/?search=${searchTerm}`);
        }
    };

    const isHome = location.pathname === '/';

    return (
        <nav className="font-jaldi font-normal bg-white ml-14 mr-14 mt-4 p-4 border-b-2 border-blue">
            <div className="flex flex-wrap items-center justify-between text-white">
                <div>
                    <img src="..\assets\images\Logo.svg" className="h-16" alt="Logo" />
                </div>

                <div className="flex flex-wrap items-center justify-end gap-3 text-blue">
                    {isHome && (
                        <form onSubmit={handleSearch} className="relative flex items-center">
                            <Input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-[300px]"
                                placeholder="Search..."
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                                <button type="submit" className="bg-transparent border-none">
                                    <img className="h-4" src="..\assets\images\Glass-icon.svg" alt="Search Icon" />
                                </button>
                            </div>
                        </form>
                    )}

                    <Link to="/">
                        <img className="h-8" src="..\assets\images\Home-icon.svg" alt="Home Icon" /><Link to="/"></Link>
                    </Link>

                    {!user && (
                        <Link to="/login">
                            <img className="h-8" src="..\assets\images\Avatar-icon.svg" alt="Avatar Icon" /><Link to="/"></Link>
                        </Link>
                    )}

                    {user && (
                        <>
                            <Link to="/create">
                                <img className="h-8" src="..\assets\images\Create-icon.svg" alt="Create Icon" /><Link to="/"></Link>
                            </Link>
                            <button onClick={() => {/* Add logout functionality */}} className="bg-transparent border-none">
                                <img className="h-8" src="..\assets\images\Logout-icon.svg" alt="Logout Icon" /><Link to="/"></Link>
                            </button>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
