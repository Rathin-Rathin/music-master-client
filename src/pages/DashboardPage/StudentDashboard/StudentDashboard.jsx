import { NavLink, Outlet } from "react-router-dom";
import Container from "../../../components/Container";
import Common from "../../../components/Common";


const StudentDashboard = () => {
    return (
        <Container>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ms-4">
                    {/* Page content here */}
                    <p className="text-3xl text-center font-bold">Student dashboard</p>
                    <Outlet />
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu text-xl text-white px-4 w-60 h-full bg-slate-500">
                        {/* Sidebar content here */}
                        <div>
                            <li className="hover:bg-slate-700"><NavLink to='/dashboard/payment'>Payment History</NavLink></li>

                            <li className="hover:bg-slate-700"> <NavLink to='/dashboard/selectedClasses'>My selected Class</NavLink></li>

                            <li className="hover:bg-slate-700">    <NavLink to='/dashboard/enrolledClasses'>My Enrolled classes</NavLink></li>

                        </div>

                        <Common />
                    </ul>

                </div>
            </div>
        </Container>
    );
};

export default StudentDashboard;