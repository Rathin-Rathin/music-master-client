import { Outlet } from "react-router-dom";
import Navbar from "../pages/SharedPages/Header/Navbar";
import Footer from "../pages/SharedPages/Footer/Footer";

const Main = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer/>
        </>
    );
};

export default Main;