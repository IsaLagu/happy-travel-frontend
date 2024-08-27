import { Link, useLocation, useNavigate } from "react-router-dom";
import useUser from "../../hooks/useUser";

const NavBar = () => {
    const { user, clearToken } = useUser()
    const location = useLocation()
    const isHome = location.pathname === '/'
    const navigate = useNavigate()

    const homeClick = () => { navigate('/') }

    const loginClick = () => { navigate('/login') };

    const createClick = () => { navigate('/create-destination') }

    const logoutClick = () => {
        clearToken()
        navigate('/logIn')
    };

    return (
        <nav className="font-jaldi font-normal bg-white ml-14 mr-14 mt-4 p-4 border-b-2 border-blue items-center">
            <div className="flex flex-wrap items-center justify-between text-white">
                <div>
                    <img src="..\assets\images\Logo.svg" className="h-16" alt="Logo" />
                </div>

                <div className="flex flex-wrap items-center justify-end gap-3 text-blue">

                    {isHome && (
                        <div className="relative flex items-center">
                            <input
                                type="text"
                                className="rounded-full font-jaldi shadow-inner shadow-slate-400 h-10 w-128 rounded- border border-blue px-5 py-3 bg-cream text-blue focus:outline-none focus:border-blue placeholder:text-blue placeholder:text-s"
                                placeholder="Search..." />
                            <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                                <img className="h-4" src="..\assets\images\Glass-icon.svg" />
                            </div>
                        </div>
                    )}

                    <button onClick={homeClick}>
                        <img className="h-8" src="..\assets\images\Home-icon.svg" />
                    </button>
                    {!user && (
                        <button onClick={loginClick}>
                            <img className="h-8" src="..\assets\images\Avatar-icon.svg" />
                        </button>)}
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

                    )
                    }

                </div>
            </div>
        </nav>
    )
}

export default NavBar;

