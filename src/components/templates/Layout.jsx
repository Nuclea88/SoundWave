import { Outlet, useLocation } from "react-router";


const Layout = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    return (
        <>
        <nav><Navbar /></nav>
        <main><Outlet /></main>
        {!isHomePage && (<footer><Footer /></footer>)}
        </>
    )
}
export default Layout;