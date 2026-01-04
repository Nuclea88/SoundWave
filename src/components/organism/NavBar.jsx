import { Link } from "react-router";

const NavBar = () => {
    return(
        <nav className="w-full flex flex-row justify-between items-center px-6 py-4 md:px-20 bg-transparent ">
            <div className="flex gap-2">
                <img src = "/images/logo.svg" alt = "SoundWave logo" className="w-10"/>
                <Link to = "/" className="text-xl px-3 py-4"> Soundwave</Link>
            </div>
            <div className="flex gap-8">
                <Link to = "/Discover" className="hover:bg-footer-icons px-3 py-1 rounded-md transition-colors"> Discover</Link>
                <Link to = "/Login" className="hover:bg-footer-icons px-3 py-1 rounded-md transition-colors"> Join</Link>
            </div>
        </nav>
    );
    }


export default NavBar;