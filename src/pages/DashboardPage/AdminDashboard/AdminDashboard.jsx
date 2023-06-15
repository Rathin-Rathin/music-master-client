import { NavLink, Outlet } from "react-router-dom";
import Common from "../../../components/Common";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
const AdminDashboard = () => {
    const { user } = useContext(AuthContext);
    return (

        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content mt-4 ms-4">
                {/* Page content here */}
                <p className="text-3xl text-center font-bold mb-4">Admin dashboard</p>

                <Outlet />
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu text-xl text-white px-4 w-60 h-full bg-slate-500 ">
                    {/* Sidebar content here */}

                    <div className="pt-6">
                        <div className="flex border-white pb-2 border-b-2 items-center justify-center w-full mb-4">
                            <div className="text-center">
                                <img src={user?.photoURL} alt="" className="p-2  w-[100px] h-[100px] border rounded-full" />
                                <p className="text-center w-full mt-2 text-orange-300 font-bold">Admin</p>
                            </div>
                        </div>
                        <li className="hover:bg-slate-700 pb-1"><NavLink to='/dashboard/adminHome'>Manage Classes</NavLink></li>

                        <li className="hover:bg-slate-700"><NavLink to='/dashboard/manageUsers'>Manage user</NavLink></li>

                    </div>
                    <Common />
                </ul>

            </div>
        </div>

    );
};

export default AdminDashboard;