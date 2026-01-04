import { Outlet, useLocation } from "react-router";
import NavBar from "../NavBar";
import Footer from "../Footer";


const Layout = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    return (
        <>
        <nav><NavBar /></nav>
        <main><Outlet /></main>
        {!isHomePage && (<footer><Footer /></footer>)}
        </>
    )
}
export default Layout;