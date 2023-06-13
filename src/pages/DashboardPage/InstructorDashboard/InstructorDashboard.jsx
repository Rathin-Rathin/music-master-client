import { NavLink, Outlet } from "react-router-dom";
import Common from "../../../components/Common";


const InstructorDashboard = () => {
    
    return (
        
            <div className="drawer mx-4  lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-slate-300 mx-4">
                    {/* Page content here */}
                <p className="text-3xl mt-3 text-center font-bold">Instructor dashboard{}</p>
                    <Outlet />
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu pt-6 text-2xl text-white px-4 w-80 h-full bg-slate-500 ">
                        {/* Sidebar content here */}

                        <div>
                            <li  className="py-2 hover:bg-slate-700"><NavLink to='/dashboard'>Home</NavLink></li>
                            <li  className="py-2 hover:bg-slate-700"><NavLink to='/dashboard/addClass'>Add a class</NavLink></li>

                            <li  className="py-2 hover:bg-slate-700"> <NavLink to='/dashboard/myClasses'>MyClass</NavLink></li>


                        </div>
                        <Common/>

                    </ul>

                </div>
            </div>
        
    );
};

export default InstructorDashboard;