import { Link } from "react-router";

const NavBar = () => {
    return(
        <nav>
            <div>
                <img src = "logo.svg" alt = "SoundWave logo" />
                <Link to = "/"> Soundwave</Link>
            </div>
            <div>
                <Link to = "/discover"> Discover</Link>
                <Link to = "/login"> Join</Link>
            </div>
        </nav>
    );
    }


export default NavBar;