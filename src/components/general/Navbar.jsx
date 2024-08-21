import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="font-jaldi font-normal bg-white ml-9 mr-9 mt-4 p-4 border-b-2 border-blue">
            <div className="flex flex-wrap items-center justify-between text-white">
                <div>
                    <img src="..\assets\images\Logo.svg" className="h-16" alt="Logo" />
                </div>

                <div className="flex flex-wrap items-center justify-end gap-4 text-blue">

                    <div className="relative flex items-center">
                        <input
                            type="text"
                            className="rounded-full shadow-inner shadow-slate-400 h-10 w-128 rounded- border border-blue px-3 py-2 bg-cream text-blue focus:outline-none focus:border-blue placeholder:text-blue placeholder:text-xs"
                            placeholder="Search..." />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                            <img className="h-4" src="..\assets\images\Glass-icon.svg" />
                        </div>
                    </div>
                    <button>
                        <img className="h-8" src="..\assets\images\Home-icon.svg"/>
                        <Link to="/"></Link>
                    </button>
                    <button>
                        <img className="h-8" src="..\assets\images\Avatar-icon.svg"/>
                        <Link to="/"></Link>
                    </button>
                </div>
            </div>
        </nav>
    )
};

export default NavBar;

