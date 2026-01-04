import { Outlet, useLocation } from "react-router";
import NavBar from "../organism/NavBar.jsx";
import Footer from "../organism/Footer.jsx";



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