import { NavLink, useNavigate } from "react-router-dom";
import Container from "../../../components/Container";
import logo from '../../../assets/images/logo/logo.png'
import Logo from "../../../components/logo";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const listItems = <>

        <NavLink to="/" className={({ isActive }) => (isActive ? 'text-blue-600 font-bold text-xl px-4' : 'px-4 font-semibold md:text-white text-lg')}>Home</NavLink>
        <NavLink to="/" className={({ isActive }) => (isActive ? 'text-blue-600 font-bold text-xl px-4' : 'px-4 font-semibold md:text-white text-lg')}>Instructors</NavLink>
        <NavLink to="/" className={({ isActive }) => (isActive ? 'text-blue-600 font-bold text-xl px-4' : 'px-4 font-semibold md:text-white text-lg')}>Classes</NavLink>

        {user && <NavLink to="/" className={({ isActive }) => (isActive ? 'text-blue-600 font-bold text-xl px-4' : 'px-4 font-semibold md:text-white text-lg')}>Profile</NavLink>}
        {user && <NavLink to="/" className={({ isActive }) => (isActive ? 'text-blue-600 font-bold text-xl px-4' : 'px-4 font-semibold md:text-white text-lg')}>Dashboard</NavLink>}


    </>
    const handleLogOut = () => {
        logOut().then(()=> {
            navigate('/login');
        })
        .catch()
    }
    return (
        <Container>
            <div className="navbar absolute z-10  pt-4 top-0 left-0 right-0">
                <div className="navbar-start flex items-center-center">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow  rounded-box w-52">
                            {listItems}
                        </ul>
                    </div>
                    <Logo />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {listItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ?
                        <>
                            <img src={logo} className="w-12 h-12 rounded-full" alt="" />
                            <button onClick={handleLogOut} className="font-bold text-xl text-white border p-1 hover:bg-orange-400 hover:border-0  border-white  mx-2">Logout</button></>
                        :
                        <NavLink to='/login' className={({ isActive }) => (isActive ? 'text-blue-600 font-bold text-xl px-4' : 'px-4 font-semibold text-white md:text-white text-lg')}>Login</NavLink>}
                </div>
            </div>
        </Container>
    );
};

export default Navbar;