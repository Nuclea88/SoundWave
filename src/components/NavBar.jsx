import { Link } from "react-router";

const NavBar = () => {
    return(
        <nav>
            <div>
                <img src = "logo.svg" alt = "SoundWave logo" />
                <Link to = "/"> Soundwave</Link>
            </div>
            <div>
                <Link to = "/Discover"> Discover</Link>
                <Link to = "/Login"> Join</Link>
            </div>
        </nav>
    );
    }


export default NavBar;