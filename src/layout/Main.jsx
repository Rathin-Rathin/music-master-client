import { Outlet } from "react-router-dom";
import Navbar from "../pages/SharedPages/Header/Navbar";
import Footer from "../pages/SharedPages/Footer/Footer";


const Main = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer/>
        </div>
    );
};

export default Main;