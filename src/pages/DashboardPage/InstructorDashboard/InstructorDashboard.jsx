import { NavLink, Outlet } from "react-router-dom";
import Common from "../../../components/Common";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Logo from "../../../components/Logo";


const InstructorDashboard = () => {
    const { user } = useContext(AuthContext);
    return (

        <div className="drawer mx-4  lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content bg-slate-300 mx-4">
                {/* Page content here */}
                <p className="text-3xl mt-3 text-center font-bold">Instructor dashboard</p>
                <Outlet />
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu pt-6 text-2xl text-white px-4 w-80 h-full bg-slate-500 ">
                    {/* Sidebar content here */}

                    <div>
                        <div className="flex border-white pb-2 border-b-2 items-center justify-center w-full mb-4">
                            <div>
                                <img src={user?.photoURL} alt="" className="p-2 w-[100px] h-[100px] border rounded-full" />
                                <p className="text-center mt-2 text-orange-300 font-bold">Instructor</p>
                                <small className="text-center">{user?.email}</small>
                            </div>
                        </div>
                        <li className="py-2 hover:bg-slate-700"><NavLink to='/dashboard/addClass'>Add a class</NavLink></li>

                        <li className="py-2 hover:bg-slate-700"> <NavLink to='/dashboard/myClasses'>MyClass</NavLink></li>


                        <Common />
                    </div>

                    <div className="mt-4">
                        <Logo />
                    </div>
                </ul>
            </div>
        </div>

    );
};

export default InstructorDashboard;