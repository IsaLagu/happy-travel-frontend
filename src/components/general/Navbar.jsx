import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Input from "../general/Input";
import { useUser } from "../../context/UserContext";

const NavBar = () => {
  const { user, clearToken } = useUser();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/?search=${searchTerm}`);
    }
  };

  const isHome = location.pathname === "/";
  const navigate = useNavigate();

  const homeClick = () => {
    navigate("/");
  };

  const loginClick = () => {
    navigate("/login");
  };

  const createClick = () => {
    navigate("/create-destination");
  };

  const logoutClick = () => {
    clearToken();
    navigate("/");
  };

  return (
    <nav className="font-jaldi font-normal bg-white ml-14 mr-14 mt-4 p-4 border-b-2 border-blue items-center">
      <div className="flex flex-wrap items-center justify-between text-white">
        <div>
          <img src="..\assets\images\Logo.svg" className="h-16" alt="Logo" />
        </div>

        <div className="flex flex-wrap items-center justify-end gap-3 text-blue">
          {isHome && (
            <form onSubmit={handleSearch} className="relative flex items-center ">
              <Input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-[300px] h-10 font-light text-xl text-blue bg-cream shadow-inner shadow-slate-400 rounded-full border-gray-300 placeholder-blue block pl-[17px"
                placeholder="Search..."
                
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                <button type="submit" className="bg-transparent border-none">
                  <img className="h-4" src="..\assets\images\Glass-icon.svg" alt="Search Icon" />
                </button>
              </div>
            </form>
          )}

          <button onClick={homeClick}>
            <img className="h-8" src="..\assets\images\Home-icon.svg" />
          </button>
          {!user && (
            <button onClick={loginClick}>
              <img className="h-8" src="..\assets\images\Avatar-icon.svg" />
            </button>
          )}
          {user && (
            <div className="flex flex-wrap items-center justify-end gap-2 text-blue">
              <button onClick={createClick}>
                <img className="h-8" src="..\assets\images\Create-icon.svg" />
                <Link to="/create-destination"></Link>
              </button>
              <button onClick={logoutClick}>
                <img className="h-8" src="..\assets\images\Logout-icon.svg" />
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
